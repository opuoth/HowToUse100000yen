import pymongo
import requests
import json
import time
import sys
sys.path.append('..')
import settings

user = settings.mongo_user
pwd = settings.mongo_pwd
coll = settings.mongo_coll

# client = pymongo.MongoClient('localhost', 27017)
client = pymongo.MongoClient('ds153495.mlab.com', 53495, retryWrites='false')
client[coll].authenticate(user, pwd)

# client.drop_database(client.sample)
db = client[coll]
co = db.items

pages = 50
cnt = 0
throw = 0

ID = settings.AP
itemURL =  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706'
genreURL = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222'
genreQs = {"genreId":"0","format":"json","applicationId":ID}

genreData = requests.get(genreURL, params=genreQs).json()
children = genreData["children"]


for child in children:
  # time.sleep(0.001)
  genreId = child['child']['genreId']
  throw+=1
  if(throw<=16):
    continue
  cnt = 0
  for page in range(pages):
    page+=1
    # time.sleep(0.001)
    itemQs = {
      "genreId":str(genreId),
      "format":"json",
      "applicationId":ID, 
      "page":str(page),
      "minPrice":"1000",
      "maxPrice":"100000",
      # "sort":"+reviewAverage"
      }
    itemData = requests.get(itemURL, params=itemQs).json()
    # print(itemData)
    if('Items' in itemData):
      items = itemData["Items"]
    else:
      time.sleep(0.3)
      cnt += 1
      if(cnt>=100000000):
        break
      print("eeeerrrrrrooooooooorrrrrrr\n")
      continue
    for item in items:
      item = item["Item"]
      item["nowGenreId"] = genreId
      # itemList = {}
      # itemList["itemName"] = item["itemName"]
      # itemList["itemPrice"] = item["itemPrice"]
      # itemList["mediumImageUrls"] = item["mediumImageUrls"]
      # itemList["itemUrl"] = item["itemUrl"]
      co.insert_one(item)
      print(item)