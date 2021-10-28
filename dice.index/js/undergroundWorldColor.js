'use strict';
/* bodyの背景色を変更する.js */

const undergroundWorldColor = () => {
  const set_undergroundWorldColor = document.getElementById('undergroundWorldColor').value;
  console.log("指定色は"+set_undergroundWorldColor+"です。")
  
  document.body.style.backgroundColor = set_undergroundWorldColor;
}