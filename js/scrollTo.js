'use strict';
/* ------------------------------------------------
（引数）のコンテンツの座標に、スムーススクロールする.js
------------------------------------------------ */
const scrollTo_btn = (e) => {
  console.log(e);
  const contents = "."+e;
  console.log(contents);
  const X = document.querySelector(contents).getBoundingClientRect().top;
  
  console.log("ｘ座標は" + X + "です。");

  document.addEventListener('click', scrollTo(0,X));
}



