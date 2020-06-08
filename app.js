const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { CONNECTION_URL, OPTIONS, DATABASE } = require("./config/mongodb.config");

process.on('unhandledRejection', console.dir);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

var port = process.env.PORT || 3000; // port番号を指定

app.get('/api/sample', (req, res) => {
  res.sendFile('./public/json/sampleItemData.json', { root: __dirname });
});

app.get('/', (req, res) => {
  res.send("aaa");
});

app.get('/api', (req, res) => {
  var sumPrice = 100000;
  var frontItems = [];
  const client = new MongoClient(process.env.MONGODB_URI ||CONNECTION_URL, OPTIONS );
  // console.log(client)
  client.connect(async function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(process.env.DB_NAME || DATABASE);

    await (async function(sumPrice){
      while(sumPrice>0){
        // var docs = await db.collection("sample")
        var items = await db.collection("items")
          .find({"itemPrice": {$lt: sumPrice}})
        
        var len = await items.count();
        if(len === 0){
          return;
        }
        var randomNum = await Math.floor(Math.random() * Math.floor(len))
        var itemArray = await items
          .limit(-1)
          .skip(randomNum)
          .toArray();
        var item = await itemArray[0]
        // console.log(item)
        // console.log(doc["itemPrice"]);
        var itemPrice = await item["itemPrice"];
        sumPrice = await sumPrice - itemPrice;
        console.log(sumPrice);
        if(sumPrice>=0){
          await frontItems.push(item);
        }else{
          return;
        }
      }
    })(sumPrice);
    console.log(frontItems);
    // res.json(frontItems);
    var data = {};
    data["items"] = frontItems;
    data["sumPrice"] = sumPrice;
    res.render("./index/index.ejs", data);
    client.close();
  });

});

app.listen(port);
console.log('listen on port ' + port);