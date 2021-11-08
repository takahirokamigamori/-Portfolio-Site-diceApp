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
        se_Judgment_success();/* 判定成功。効果音（SE） */
        return "成功";

      } else {
        se_Judgment_failure();/* 判定失敗。効果音（SE） */
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
    ログのメッセージを更新し、処理結果を出力する。
    関数[diceRollLog_controller]はforDice.jsに記載。
    （引数）は最新のログに使用
  ------------------------------------------------ */
  diceRollLog_controller(d100);
}