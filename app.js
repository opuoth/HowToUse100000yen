const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { CONNECTION_URL, OPTIONS, DATABASE } = require("./config/mongodb.config");

process.on('unhandledRejection', console.dir);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000; // port番号を指定

app.get('/api/sample', (req, res) => {
  res.json(
    [{"_id":"5ed222b910a56b546d121e60","mediumImageUrls":[{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/cococaru/cabinet/product/san/pair1/sa-49sa-50-1-wg.jpg?_ex=128x128"},{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/cococaru/cabinet/san/20170214san/sa-49sa-50-2.jpg?_ex=128x128"},{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/cococaru/cabinet/san/20170214san/sa-49sa-50-3.jpg?_ex=128x128"}],"pointRate":1,"shopOfTheYearFlag":0,"affiliateRate":8,"shipOverseasFlag":1,"asurakuFlag":0,"endTime":"2020-06-11 01:59","taxFlag":0,"startTime":"2020-06-04 20:00","itemCaption":"【送料無料】こちらの商品は弊社クラフトマンの手によって一点一点お造り致しますので、お届けまで通常12営業日程掛かります。最短での発送をご希望の場合は、日付指定をしないでご注文下さい。（お届け情報をご確認下さい）レディース天然ダイヤモンド0.04カラット。文字入れは有料にて承ります（備考欄にご記載下さい）。品質を重視した繊細な日本の匠の技で創られた自信作です。プレ花嫁 結婚準備 ウエディング 結婚指輪 ペアリング マリッジリング エンゲージリング ブライダル 結婚 結納 婚約 出産 告白 サプライズ プロポーズ 花嫁 クリスマス プレゼント バレンタイン ホワイトデー お花見 ゴールデンウィーク お中元 七夕 夏休み 夏祭り 花火大会 運動会 ハロウィン ボーナス 紅葉 お歳暮 年末 年越し 年始 正月 元旦 お祝いこの商品は他の地金タイプもございますプラチナ18金10金シルバーココカル cococaru クリスマス プレゼント 記念日 誕生日 結婚式 入学式 卒業式 就職祝い 結婚指輪 ペアリング 婚約指輪 普段使用 ギフト 10代 20代 30代 40代 50代 60代 彼女 娘 母親 嫁 奥さん 妻 品質保証書 金属アレルギー ダイヤモンド ルビー サファイヤ パール ガーネット アメジスト アクアマリン クオーツ エメラルド ムーンストーン ペリドット トルマリン トパーズ タンザナイト等の人気商品も多数取扱っております。この商品は他の地金タイプもございますプラチナ18金10金シルバー","catchcopy":"【送料無料】結婚指輪 pt900","tagIds":[1000879,1003583,1003601,1013630],"smallImageUrls":[{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/cococaru/cabinet/product/san/pair1/sa-49sa-50-1-wg.jpg?_ex=64x64"},{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/cococaru/cabinet/san/20170214san/sa-49sa-50-2.jpg?_ex=64x64"},{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/cococaru/cabinet/san/20170214san/sa-49sa-50-3.jpg?_ex=64x64"}],"asurakuClosingTime":"","imageFlag":1,"availability":1,"shopAffiliateUrl":"","itemCode":"cococaru:10199267","postageFlag":0,"itemName":"結婚指輪 マリッジリング プラチナ900 ダイヤモンド 2本セット 品質保証書 金属アレルギー 日本製 誕生日 ギフト","itemPrice":72000,"pointRateEndTime":"","shopCode":"cococaru","affiliateUrl":"","giftFlag":0,"shopName":"ココカル","reviewCount":1,"asurakuArea":"","shopUrl":"https://www.rakuten.co.jp/cococaru/","creditCardFlag":1,"reviewAverage":3,"shipOverseasArea":"ワールドワイド","genreId":"206951","pointRateStartTime":"","itemUrl":"https://item.rakuten.co.jp/cococaru/sa-49sa-50-pt-m/","nowGenreId":216129},
    {"_id":"5ed222d010a56b546d12243d","mediumImageUrls":[{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/fieldboss/cabinet/syouhin206/206813.jpg?_ex=128x128"}],"pointRate":1,"shopOfTheYearFlag":0,"affiliateRate":4,"shipOverseasFlag":0,"asurakuFlag":0,"endTime":"","taxFlag":0,"startTime":"","itemCaption":"メーカー品番 '013370 商品仕様 ●材質：樹脂 ●中国製 検索キーワード： ●この商品は、【お取り寄せ扱い】となります。ご購入可能な状態であっても在庫が確保された商品ではございません。メーカー在庫、欠品等の場合は、 欠品商品のみキャンセルとさせて頂く場合がございます。何卒ご理解の程、宜しくお願い致します。 関　　連　　商　　品 カラー砂 100g イエロー カラー砂 100g オレンジ カラー砂 100g レッド カラー砂 100g ピンク カラー砂 100g エメラルド カラー砂 100g グリーン","catchcopy":"【アーテック】","tagIds":[1000882,1012948],"smallImageUrls":[{"imageUrl":"https://thumbnail.image.rakuten.co.jp/@0_mall/fieldboss/cabinet/syouhin206/206813.jpg?_ex=64x64"}],"asurakuClosingTime":"","imageFlag":1,"availability":1,"shopAffiliateUrl":"","itemCode":"fieldboss:10114765","postageFlag":1,"itemName":"カラー砂 100g パープル (AC206813/'013370)【QCA04】","itemPrice":280,"pointRateEndTime":"","shopCode":"fieldboss","affiliateUrl":"","giftFlag":0,"shopName":"Field Boss 楽天市場店","reviewCount":0,"asurakuArea":"","shopUrl":"https://www.rakuten.co.jp/fieldboss/","creditCardFlag":1,"reviewAverage":0,"shipOverseasArea":"","genreId":"203052","pointRateStartTime":"","itemUrl":"https://item.rakuten.co.jp/fieldboss/206813/","nowGenreId":100533}]
  );
});

app.get('/', (req, res) => {
  res.send("aaa");
});

app.get('/api', (req, res) => {
  var sumPrice = 100000;
  var frontItems = [];
  const client = new MongoClient(process.env.MONGODB_URI ||CONNECTION_URL, OPTIONS );
  client.connect(async function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(DATABASE);

    await (async function(sumPrice){
      while(sumPrice>0){
          var docs = await db.collection("items")
            .find({"itemPrice": {$lt: sumPrice}})
            // .sort({ "itemPrice": 1})
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