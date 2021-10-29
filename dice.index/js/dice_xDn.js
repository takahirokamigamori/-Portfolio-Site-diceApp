'use strict';
/*-------------------------------------
（引数ｘ,引数y）を受け取り
サイコロを　”ｘ個”　”ｙ種類”　をセットして振り
合計値を算出し、メッセージウインドウに表示する.js
-------------------------------------*/


const dice_xDn = (x,y) => {

  /* ダイスの種類ｙをセットする */
  const diceTypes = y;
  console.log("ダイスの種類は" + diceTypes + "面ダイスです。");

  /* ダイスの個数ｘをセットする。 */
  const end_dice = x;
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
  ログのメッセージの先頭に、処理結果を出力する。
------------------------------------------------ */
  const js_log_message = document.getElementById('js_log_message');
  console.log(js_log_message);
  js_log_message.insertAdjacentText('afterbegin',
    end_dice + "Ｄ" + diceTypes + "の出目は、合計： " + choiceDiceNum + " でした。");
}