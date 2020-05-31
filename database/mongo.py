import pymongo
import requests
import json
import time

client = pymongo.MongoClient('localhost', 27017)
db = client.rakutenAPI
co = db.items

pages = 99
cnt = 0

ID = "1083629625210134163"
itemURL =  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706'
genreURL = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222'
genreQs = {"genreId":"0","format":"json","applicationId":ID}

genreData = requests.get(genreURL, params=genreQs).json()
children = genreData["children"]


for child in children:
  time.sleep(0.1)
  genreId = child['child']['genreId']
  cnt = 0
  for page in range(pages):
    page+=1
    time.sleep(0.1)
    itemQs = {"genreId":str(genreId),"format":"json","applicationId":ID, "page":str(page)}
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

# for data in co.find():
#     print(data)