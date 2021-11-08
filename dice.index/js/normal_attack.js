'use strict';

/*
const NOW_scale_噴火ゲージ = (25*key/100)vw;
const NOW_scale_魔龍ゲージ = (25*key/100)vw;
const NOW_scale_恐獣ゲージ = (25*key/100)vw;
const NOW_scale_国力ゲージ = (25*key/100)vw;
const NOW_scale_戦力ゲージ = (25*key/100)vw;
const NOW_scale_民意ゲージ = (25*key/100)vw;
const NOW_scale_怪獣ゲージ = (25*key/100)vw;
const NOW_scale_海賊ゲージ = (25*key/100)vw;
*/

const normal_attack = () => {
  const normal_attack_btn = document.querySelector('.normal_attack_btn');
  const total = document.querySelector('.totalValueInDice');

  const normal_attack_damage = randomD6() + randomD6() - 4;
  console.log(normal_attack_damage);
  
  se_diceRoll(); /* ダイスを転がす。効果音（SE） */

  if (normal_attack_damage > 0) {
    const normal_attack_damage_message = "nに攻勢をかけ<br><h2> " + normal_attack_damage + "点</h2>のダメージを与えた！";
    alert(normal_attack_damage_message);
    total.innerHTML = normal_attack_damage_message;

  } else if (normal_attack_damage == 0) {
    const normal_attack_damage_message = "nと応戦し、時間を稼いだ。";
    alert(normal_attack_damage_message);
    total.innerHTML = normal_attack_damage_message;

  } else if (normal_attack_damage < 0) {
    const normal_attack_damage_message = "nと応戦するも、<br><h2> nは体力を" + normal_attack_damage + "点</h2> 回復させた！";
    alert(normal_attack_damage_message);
    total.innerHTML = normal_attack_damage_message;

  } else {
    total.innerHTML = "error message";
  }
}

//normal_attack();

