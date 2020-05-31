const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { CONNECTION_URL, OPTIONS, DATABASE } = require("./config/mongodb.config");
process.on('unhandledRejection', console.dir);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // port番号を指定

app.get('/api', (req, res) => {
  var sumPrice = 100000;
  var frontItems = [];
  MongoClient.connect(CONNECTION_URL, OPTIONS, async function(err, client) {
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