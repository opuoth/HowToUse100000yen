const request = require('request');
const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const { CONNECTION_URL, OPTIONS, DATABASE } = require("./config/mongodb.config");

var itemURL = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706';
var genreURL = 'https://app.rakuten.co.jp/services/api/IchibaGenre/Search/20140222';
const ID = "1013480220474653408";
var itemList = [];

MongoClient.connect(CONNECTION_URL, OPTIONS, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(DATABASE);

  const promise = new Promise((resolve, reject) => {
    request.get({
      uri: genreURL,
      headers: {'Content-type': 'application/json'},
      qs: {
        "format": 'json',
        "applicationId" : ID,
        "genreId" : "0"
      },
      json: true
    }, function(err, req, genre){
      var children = genre.children;
      for(var child of children){
        var genreId = child.child.genreId;
        // console.log(genreId);
        for(var page = 1; page <= 1 ; page++){
          request.get({
              uri: itemURL,
              headers: {'Content-type': 'application/json'},
              qs: {
                "format": 'json',
                "applicationId" : ID,
                "genreId" : genreId.toString(),
                "page": page.toString()
              },
              json: true
          }, function(err, req, data){
            var items = data.Items;
            if (items != undefined){
              for( var item of items){
                var obj = {
                  "itemName": item.Item.itemName,
                  "itemPrice": item.Item.itemPrice,
                  "itemUrl": item.Item.itemUrl,
                  "mediumImageUrls": item.Item.mediumImageUrls
                };
                // console.log(obj);
                // itemList.push(obj);
                db.collection("items").insertOne(obj , function(err, res) {
                  if (err) throw err;
                });
              }
            }
          });
        }
      }
    });
  });
  promise.then(() => client.close());
});



// MongoClient.connect(CONNECTION_URL, OPTIONS, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(DATABASE);
//   var obj = { 
//     itemName: "Columbia コロンビア シューズ 一般 Low Drag&#8482; PFG",
//     itemPrice: "H14550", 
//     itemUrl: "https://item.rakuten.co.jp/owncolor/z68bd7380494-2081339/", 
//     mediumImageUrls: [
//       {
//         imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/owncolor/cabinet/z61077/8bd9331802-4940837-0.jpg?_ex=128x128'
//       },
//       {
//         imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/owncolor/cabinet/z61077/8bd9331802-4940837-1.jpg?_ex=128x128'
//       },
//       {
//         imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/owncolor/cabinet/z61077/8bd9331802-4940837-2.jpg?_ex=128x128'
//       }
//     ]
//   };
//   db.collection("items").insertOne(itemList , function(err, res) {
//     if (err) throw err;
//     client.close();
//   });
// });
