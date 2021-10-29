'use strict';
/* ------------------------------------------------
「１Ｄ１００の出目」と「判定の成否」を出力する.js
------------------------------------------------ */
const dice1D100 = () => {
  const d100 = randomD100();
  console.log("１Ｄ１００の出目は" + d100 + "でした。");

  /* 判定の成否を処理する */
  const success = document.getElementById('success1d100');
  const success1d100 = success.value;
  const Judgment_result = () => {
    if (d100 <= success1d100) {
      return "成功";
    } else {
      return "失敗";
    }
  }
  const d100_img = '<img src="./img/dice/D100.png">'

  const textContainer = document.querySelector('.totalValueInDice');
  console.log(textContainer);

  textContainer.innerHTML = d100_img +
    "<br>" +
    "<span>１Ｄ１００の出目は <span class='gold xx-large'>" + d100 + "</span> でした。</span>" +
    "<br>" +
    "<span>判定は <span class='gold xx-large'>" + Judgment_result() + "</span> でした。</span>";

  /* ------------------------------------------------
    ログの総計【log_total_num】にd100を加算して、再定義する。
    関数は「forDice.js」にあります。
  ------------------------------------------------ */
  let Results = set_log_total_num(d100);
  console.log("log_total_numは" + Results + " でした。");
  /* ------------------------------------------------
   ログの総計を表示するHTMLの(log_total_span)を取得して
   ログの総計【log_total_num】の部分を
   上書きして処理結果を出力する
   関数は「forDice.js」にあります。
  ------------------------------------------------ */
  innerHTML_log_total_num(Results);

  /* ------------------------------------------------
    ログのメッセージの先頭に、処理結果を出力する。
  ------------------------------------------------ */
  const js_log_message = document.getElementById('js_log_message');
  console.log(js_log_message);
   js_log_message.insertAdjacentText('afterbegin',
    "１Ｄ１００の出目は　" + d100 + " でした。" +
    "判定は " + Judgment_result() + "しました。");

}