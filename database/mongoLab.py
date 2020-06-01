import pymongo
import requests
import json
import time

user = "heroku_t71gxgpg"
pwd = "veibbs8t98q3hrlrlll0mgmg6d"

# client = pymongo.MongoClient('localhost', 27017)
client = pymongo.MongoClient('ds153495.mlab.com', 53495, retryWrites='false')
client['heroku_t71gxgpg'].authenticate(user, pwd)

# client.drop_database(client.sample)
db = client.heroku_t71gxgpg
co = db.items

pages = 50
cnt = 0

ID = "1083629625210134163"
itemURL =  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706'
genreURL = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222'
genreQs = {"genreId":"0","format":"json","applicationId":ID}

genreData = requests.get(genreURL, params=genreQs).json()
children = genreData["children"]


for child in children:
  time.sleep(0.01)
  genreId = child['child']['genreId']
  cnt = 0
  for page in range(pages):
    page+=1
    time.sleep(0.01)
    itemQs = {
      "genreId":str(genreId),
      "format":"json",
      "applicationId":ID, 
      "page":str(page),
      "minPrice":"1000",
      "maxPrice":"100000"
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