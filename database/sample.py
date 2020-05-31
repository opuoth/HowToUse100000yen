import pymongo
import requests
import json
import time

client = pymongo.MongoClient('localhost', 27017)
client.drop_database(client.sample)
db = client.sample
co = db.sample

pages = 1
cnt = 0

ID = "1083629625210134163"
itemURL =  'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706'
genreURL = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222'
genreQs = {"genreId":"0","format":"json","applicationId":ID}

genreData = requests.get(genreURL, params=genreQs).json()
child = genreData["children"][0]
# time.sleep(0.1)
genreId = child['child']['genreId']
for page in range(pages):
  page+=1
  # time.sleep(0.1)
  itemQs = {"genreId":str(genreId),"format":"json","applicationId":ID, "page":str(page)}
  itemData = requests.get(itemURL, params=itemQs).json()
  # print(itemData["error"])
  if('Items' in itemData):
    items = itemData["Items"]
  else:
    time.sleep(1)
    print(itemData)
    print("eeeerrrrrrooooooooorrrrrrr\n")
    continue
  for item in items:
    cnt += 1
    if(cnt>=6):
      break
    item = item["Item"]
    item["nowGenreId"] = genreId
    co.insert_one(item)
    print(item)