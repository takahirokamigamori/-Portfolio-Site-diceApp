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
  ダイスロールの記録を削除のする.js
------------------------------------------------ */
const logDelete = () => {
  const js_log_message = document.getElementById('js_log_message');
  console.log(js_log_message);
  js_log_message.innerHTML = "<p></p>"
  console.log(textContainer);
}