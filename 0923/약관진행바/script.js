const box = document.querySelector('.box');

//box 총 높이
const boxY = box.scrollHeight;

//box 크기의 높이
const boxHeight = box.clientHeight;

console.log(`box 총 높이`,boxY);
console.log(`box 크기 높이`,boxHeight);

//총 높이는 스크롤전체 높이 , 크기높이는 보이는 만큼의 높이

let isDisable = true;
box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;


  if(isDisable && scroll + boxHeight > boxY -5){
    console.log('마지막까지 내림')
    isDisable = false;
    document.querySelector('#chk').disabled = false;
  }
});

//총 높이와 다른데 그 이유는 스크롤 한 만큼이기 때문
// 첫화면에 보이는 박스크기만큼의 스크롤을 제외해야한다는 것
//그래서 총 높이 == scrollTop + clientHeight와 같냐로 비교하면 됨
// 전체 높이의 css나 이것저것으로 약간의 오차가 있을 수 있기 때문에
// scroll + boxheight > boxY -5 정도의 오차 확인하면됨


//화면 높이 //보고있는 브라우저 화면 크기 기준
// console.log(window.innerHeight);
let windowY = window.innerHeight;

//body태그 높이
// console.log(document.body.clientHeight);
let bodyY = document.body.clientHeight;

window.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  let scrollY = window.scrollY;
  let status = scrollY / (bodyY - windowY) * 100;
  let sbar = document.querySelector('.status-bar');

  sbar.style.width = `${status}%`;
})
