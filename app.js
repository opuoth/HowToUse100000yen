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
    [{
      _id: "5ed22dee28f900d6f2a8bb56",
      mediumImageUrls: [ [Object], [Object], [Object] ],
      pointRate: 1,
      shopOfTheYearFlag: 0,
      affiliateRate: 4,
      shipOverseasFlag: 1,
      asurakuFlag: 0,
      endTime: '',
      taxFlag: 0,
      startTime: '',
      itemCaption: '　 　企画内容 　マルミヤワールドからのノベルティプレゼント！！ 　数量限定★プレゼントですので、この機会をぜひ！お見逃しなく♪ 　参加方法は簡単♪【特別クーポン】をご注文の商品と一緒に 　買い物かごへ入れて下さい♪ 　これでOK！！ 　今回の素敵なプレゼントがお買い物商品と一緒に届いちゃいますよ〜☆ 　※通常販売とは異なりますので、以下の注意事項を必ずお読みくださいませ。 　　よろしくお願いいたします。 　　※合計16,500円（税込）以上お買い求め頂き、 　　　一緒に【特別クーポン】を買い物かごに入れてご注文ください。 　　　※別々でご注文されますと無効になります。 　　　※メール便発送の場合、【特別クーポン】は自動的にキャンセルとなります。 　　　※当店からご注文後にお送りする確認メールにて金額(1円)を0円に 　　　訂正させていただきます。 　　　●こちらは1円ノベルティです。 　　　●ご購入後の金額訂正がNGのため、1円での販売となります。 　　　ご了承の上、ご注文ください。 　　　●カラーは当店のおまかせとなります。 対象 　合計16,500円（税込）以上お買い求めのお客様に限り、 　【特別クーポン】をご購入いただくことができます。 　※必ず商品と同じ買い物かごへ【特別クーポン】を入れてご注文下さい。 　※クーポンを入れ忘れた場合、後ほど当店へご連絡いただきましても、 　　プレゼントはお付けできませんのでご注意下さいませ。 ルール（必読！） 　●メール便発送の場合、【特別クーポン】は自動的にキャンセルとなります。 　●ラッピング・メール便不可。 　●福袋・予約販売商品はプレゼント対象外です。 　●【特別クーポン】を単品でカゴに入れるなど、 　　お買い求めの商品と別々にご注文頂きますと自動的にキャンセルと 　　させて頂きます。 　●お1人様1点限り。 　●他のプレゼント企画クーポン・割引クーポンとは併用できません。 　　（併用があった場合、全てのプレゼントがキャンセルとなります。 　　　ご注意下さい。） 　●当企画参加の為に以前のご注文をキャンセルすることはできません。 　●【特別クーポン】をご購入いただいた場合でも、対象外の場合はご連絡なしに 　　【特別クーポン】をキャンセルさせていただきますので、何卒ご了承ください。 　※ご不明な点がございましたら、お気軽にこちらまでお問い合わせ下さい。',
      catchcopy: '16,500円（税込）以上お買い求めでプレゼント♪ お1人様1回限り 注意事項を必ずお読み下さい!',
      tagIds: [ 1023041 ],
      smallImageUrls: [ [Object], [Object], [Object] ],
      asurakuClosingTime: '',
      imageFlag: 1,
      availability: 1,
      shopAffiliateUrl: '',
      itemCode: 'marumiya-world:10047567',
      postageFlag: 1,
      itemName: 'ノベルティプレゼント★HAKKAオリジナルクッション1点プレゼント',
      itemPrice: 1,
      pointRateEndTime: '',
      shopCode: 'marumiya-world',
      affiliateUrl: '',
      giftFlag: 0,
      shopName: 'マルミヤワールド',
      reviewCount: 0,
      asurakuArea: '',
      shopUrl: 'https://www.rakuten.co.jp/marumiya-world/',
      creditCardFlag: 1,
      reviewAverage: 0,
      shipOverseasArea: 'ワールドワイド',
      genreId: '101828',
      pointRateStartTime: '',
      itemUrl: 'https://item.rakuten.co.jp/marumiya-world/coupon726/',
      nowGenreId: 100533
    },
    {
      _id: "5ed238ec28f900d6f2a8f689",
      mediumImageUrls: [ [Object], [Object] ],
      pointRate: 1,
      shopOfTheYearFlag: 0,
      affiliateRate: 2,
      shipOverseasFlag: 0,
      asurakuFlag: 0,
      endTime: '',
      taxFlag: 0,
      startTime: '',
      itemCaption: '◎『総合評価』はコチラ ICLM47(ライトマゼンタ) PM-A970, PM-T990 ICチップ付（残量表示機能付） ICLM47(ライトマゼンタ)：15ml(染料) 商品発送日より12ヵ月間保証とさせていただきます。 また、12ヵ月間以内のはじめて装着時の製品のインク漏れ・初期不良のみの保証とさせていただきます。 ※ 送料無料の商品と送料有料の商品と同梱の場合、送料無料ではなくなりますので、ご注意ください。',
      catchcopy: '1年安心保証！PM-A970 PM-T990',
      tagIds: [ 1004681, 1005288, 1005291, 1021137 ],
      smallImageUrls: [ [Object], [Object] ],
      asurakuClosingTime: '',
      imageFlag: 1,
      availability: 1,
      shopAffiliateUrl: '',
      itemCode: 'lovestyle:10013897',
      postageFlag: 1,
      itemName: '1本1円！！エプソンプリンター用互換インクカートリッジ ICLM47 単品【ICチップ付（残量表示機能付）】（関連商品 IC6CL47 IC47 ICBK47 ICC47 ICM47 ICY47 ICLC47 ICLM47）',
      itemPrice: 1,
      pointRateEndTime: '',
      shopCode: 'lovestyle',
      affiliateUrl: '',
      giftFlag: 0,
      shopName: '彩天地',
      reviewCount: 0,
      asurakuArea: '',
      shopUrl: 'https://www.rakuten.co.jp/lovestyle/',
      creditCardFlag: 1,
      reviewAverage: 0,
      shipOverseasArea: '',
      genreId: '502185',
      pointRateStartTime: '',
      itemUrl: 'https://item.rakuten.co.jp/lovestyle/8200028/',
      nowGenreId: 100026
    }
  ]
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