'use strict';

const diceImgSet = (n) => {
  let d6img = 0;
  switch (n) {
    case 1:
      d6img = '<img src=img/dice/1.png>';
      return d6img;
      break;
    case 2:
      d6img = '<img src=img/dice/2.png>';
      return d6img;
      break;
    case 3:
      d6img = '<img src=img/dice/3.png>';
      return d6img;
      break;
    case 4:
      d6img = '<img src=img/dice/4.png>';
      return d6img;
      break;
    case 5:
      d6img = '<img src=img/dice/5.png>';
      return d6img;
      break;
    case 6:
      d6img = '<img src=img/dice/6.png>';
      return d6img;
      break;
  }
}

const dice2D6 = () => 　{
  const d6_1 = randomD6();
  const d6_2 = randomD6();
  const num2D6 = d6_1 + d6_2;
  const d6_1img = diceImgSet(d6_1);
  const d6_2img = diceImgSet(d6_2);
  const textContainer = document.querySelector('.totalValueInDice');

  console.log("１個目の出目は" + d6_1 + "でした。");
  console.log("２個目の出目は" + d6_2 + "でした。");
  console.log("２Ｄ６の出目は" + num2D6 + "でした。");

  se_diceRoll(); /* ダイスを転がす。効果音（SE） */

  textContainer.innerHTML = "<p>２Ｄ６の出目は " + d6_1img + " " + d6_2img + " が出ました。</p>" +
    "<p>合計：<span class='gold xx-large'> " + num2D6 + " </span>でした。</p>";
  console.log(textContainer);

  /* ------------------------------------------------
  ログの総計【log_total_num】にnum2D6を加算して、再定義する。
  関数は「forDice.js」にあります。
  ------------------------------------------------ */
  let Results = set_log_total_num(num2D6);
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
  diceRollLog_controller(num2D6);


}