// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: '1653595023',
  channelSecret: '086cb134103ec13c706d29355a1ec7c3',
  channelAccessToken: 'mG51ORcVhpvXSRH7t1lTouECL+4Rd5wFeSxUKQjvU/gwUKotOvbQLpCPTLTGVDHoy/AjFfZ4RwUe3lGmyn1Td3Jg+0hfsPoEvr8gl19e4e2O3GSk6/CTiiRaNZ7pnE2DmfJgLVvAprl+McG8g9dRggdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;

  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});