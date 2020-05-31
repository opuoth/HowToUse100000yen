const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { CONNECTION_URL, OPTIONS, DATABASE } = require("./config/mongodb.config");
const client = new MongoClient(process.env.MONGODB_URI ||CONNECTION_URL, OPTIONS );

process.on('unhandledRejection', console.dir);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // port番号を指定

app.get('/', (req, res) => {
  res.send("aaa");
});

app.get('/api', (req, res) => {
  var sumPrice = 1000;
  var frontItems = [];
  client.connect(async function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(DATABASE);

    await (async function(sumPrice){
      while(sumPrice>0){
          var docs = await db.collection("items")
            .find({"itemPrice": {$lt: sumPrice}})
            .sort({ "itemPrice": 1})
            .toArray();
        if(docs.length === 0){
          return;
        }
        var doc = await docs[ Math.floor(Math.random() * Math.floor(docs.length))];
        // console.log(doc["itemPrice"]);
        var itemPrice = await doc["itemPrice"];
        sumPrice = await sumPrice - itemPrice;
        console.log(sumPrice);
        if(sumPrice>=0){
          await frontItems.push(doc);
        }else{
          return;
        }
      }
    })(sumPrice);
    console.log(frontItems);
    res.json(frontItems);
    client.close();
  });

});

app.listen(port);
console.log('listen on port ' + port);