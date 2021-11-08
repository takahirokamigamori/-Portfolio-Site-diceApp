'use strict';
/* ------------------------------------------------
各機能で使う【関数】を纏めた.js
------------------------------------------------ */


/* ------------------------------------------------
サイコロ（Dics）をランダムメソッドで変数する.js
------------------------------------------------ */
const randomD4 = () => Math.floor(Math.random() * 4 + 1);
const randomD6 = () => Math.floor(Math.random() * 6 + 1);
const randomD8 = () => Math.floor(Math.random() * 8 + 1);
const randomD10 = () => Math.floor(Math.random() * 10 + 1);
const randomD12 = () => Math.floor(Math.random() * 12 + 1);
const randomD20 = () => Math.floor(Math.random() * 20 + 1);
const randomD100 = () => Math.floor(Math.random() * 100 + 1);

/* ------------------------------------------------
サイコロ（Dics）の効果音を鳴らす関数.js
------------------------------------------------ */
/* （引数＝url）の音声ファイルを１回再生する関数 */
const se_dice = (url) => { 
 const music = new Audio(url);
 music.volume = 0.2; /* 音量設定（最小０～最大１） */
 music.loop = false; /* ループしない（生成回数１回） */
 music.play();
 }
  /* ダイスを転がす。効果音（SE） */
  const se_diceRoll = () => se_dice('./music/diceroll.mp3');
  /* 判定成功。効果音（SE） */
  const se_Judgment_success = () => se_dice('./music/Judgment_success.mp3');
  /* 判定失敗。効果音（SE） */
  const se_Judgment_failure = () => se_dice('./music/賽銭を投げ入れる.mp3');



/* ------------------------------------------------
  ログの総計【log_total_num】に、
  ダイスロールの（引数）を加算して、再定義する.js
------------------------------------------------ */
const set_log_total_num = (e) => {
  console.log("引数は" + e + "です。");
  const ere = document.querySelector('.js_log_total_span');
  let set_log_total_num = Number(ere);
  console.log("前回の総計は " + set_log_total_num + " でした。");
  let log_total_num = set_log_total_num + e;
  console.log("新しい総計は " + log_total_num + " になります。");
  return log_total_num;
}

/* ------------------------------------------------
  ログの合計を表示するための文字列(log_total_span)を取得して
  
  ログの合計【log_total_num】に
  d100を加算して、再定義する。上書きして処理結果を出力する/js
------------------------------------------------ */
const innerHTML_log_total_num = (e) => {
  const ere = document.getElementById('log_total');

  ere.innerHTML = "<p class='' id='js_log_total'>合計は <span class='gold xx-large' id='js_log_total_span'>" + e + "</span> です。</p>";
  console.log("<p class='' id='js_log_total'>合計は <span class='gold xx-large' id='js_log_total_span'>" + e + "</span> です。</p>");
};

/* ------------------------------------------------
  ダイスロールの記録を操作する.js
------------------------------------------------ */
const diceRollLog_controller = (key) =>{
  /* 処理➊　１つ前の最新のログ（js_now_log_message）を取得して、
            変数「before_log_message」として定義する
            ※あとで過去ログの先頭に追加するのに使う */
  const before_log_message = document.getElementById('js_now_log_message').textContent;
  console.log("before_log_messageは "+before_log_message+"です");

  /* 処理➋　最新のログ（js_now_log_message）を取得して、
            メッセージの先頭に、処理結果を上書きして出力する。 */
  const js_now_log_message = document.getElementById('js_now_log_message');
  console.log("js_now_log_messageは "+js_now_log_message.textContent+"です");
  js_now_log_message.innerHTML = ("出目の合計は　" + key + "　でした。");

  /* 処理➌　過去ログ（js_before_log_message）を取得する*/
  const js_before_log_message = document.getElementById('js_before_log_message');
  console.log("js_before_log_messageは "+js_before_log_message.textContent+"です");

  /* 処理➍　過去ログ（js_before_log_message）を
            １つ前の最新ログ（➊で取得）「before_log_message」を追加して
            出力する。 */
  js_before_log_message.innerHTML = (before_log_message+"<br>"+js_before_log_message.innerHTML)
}


/* ------------------------------------------------
  ダイスロールの記録を削除のする.js
------------------------------------------------ */
const logDelete = () => {
  const js_now_log_message = document.getElementById('js_now_log_message');
  console.log(js_now_log_message);
  js_now_log_message.innerHTML = "<p></p>";

  const js_before_log_message = document.getElementById('js_before_log_message');
  console.log(js_before_log_message);
  js_before_log_message.innerHTML = "<p></p>"; 

  console.log("ログを削除しました。");
}