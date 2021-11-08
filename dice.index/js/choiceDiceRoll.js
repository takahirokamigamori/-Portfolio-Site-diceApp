'use strict';
/*-------------------------------------
サイコロの　”種類”　”個数”　を選択して、合計値を算出し、
メッセージウインドウに表示する.js
-------------------------------------*/


const choiceDiceRoll = () => {

  /* ダイスの種類を習得する */
  const $diceTypes = document.getElementById('diceTypes');
  const diceTypes = $diceTypes.value;
  console.log("ダイスの種類は" + diceTypes + "面ダイスです。");

  /* ダイスの個数を習得する。 */
  const $end_dice = document.getElementById('roll');
  const end_dice = $end_dice.value;
  console.log("ダイスを" + end_dice + "個、振りました。")

  /* ダイスの種類に対応する、ランダムダイス関数をセットする */
  const choiceDiceSet = () => {
    let choiceDiceSet = 0;
    switch (diceTypes) {
      case "4":
        choiceDiceSet = randomD4();
        return choiceDiceSet;
        break;
      case "6":
        choiceDiceSet = randomD6();
        return choiceDiceSet;
        break;
      case "8":
        choiceDiceSet = randomD8();
        return choiceDiceSet;
        break;
      case "10":
        choiceDiceSet = randomD10();
        return choiceDiceSet;
        break;
      case "12":
        choiceDiceSet = randomD12();
        return choiceDiceSet;
        break;
      case "20":
        choiceDiceSet = randomD20();
        return choiceDiceSet;
        break;
      case "100":
        choiceDiceSet = randomD100();
        return choiceDiceSet;
        break;
      default:
        choiceDiceSet = randomD6();
        return choiceDiceSet;
        break;
    }
  }

  /* メッセージウィンドウを習得し、処理結果を出力する */
  const textContainer = document.querySelector('.totalValueInDice');

  let dn = 0;
  let choiceDiceNum = 0;
  for (let i = 0; i < end_dice; i++) {
    dn = choiceDiceSet();
    console.log(dn);
    choiceDiceNum = choiceDiceNum + dn;
  }
  se_diceRoll(); /* ダイスを転がす。効果音（SE） */
  
  console.log(diceTypes + "面体のサイコロを" + end_dice + "個、振りました。");
  console.log("合計の出目は " + choiceDiceNum + " でした。");

  textContainer.innerHTML = "<p><span class='green x-large'> " + diceTypes + " </span>面体のサイコロを<br><span class='green x-large'> " + end_dice + " </span>個、振りました。</p>" +
    "<p>合計の出目は <span class='gold xx-large'>" + choiceDiceNum + " </span> でした。</p>";
  console.log(textContainer);

  /* ------------------------------------------------
  ログの総計【log_total_num】にchoiceDiceNumを加算して、再定義する。
  関数は「forDice.js」にあります。
------------------------------------------------ */
  let Results = set_log_total_num(choiceDiceNum);
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
  diceRollLog_controller(choiceDiceNum);

}