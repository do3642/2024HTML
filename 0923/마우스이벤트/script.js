document.querySelector('.btn').addEventListener('mousedown', (e) => {
  console.log(e.button);
  // 좌클릭 0, 휠클릭 1, 우클릭 2 마우스 사이드 버튼도 숫자있음
  if(e.ctrlKey){
    console.log('컨트롤 클릭');
  }
  if(e.altKey){
    console.log('알트 클릭')
  }
  if(e.shiftKey){
    console.log('쉬프트 클릭')
  }

  if(e.ctrlKey && e.shiftKey){
    console.log('컨트롤+쉬프트클릭');
  }
  //원리는 해당 키를 입력했을 때 true를 반환해서 true쪽이 실행됨
});


// document.body.addEventListener('mousemove',(e)=>{
//   console.log('clientX',e.clientX);
//   console.log('clientY',e.clientY);
//   console.log('=============================');
//   console.log('pageX',e.pageX);
//   console.log('pageY',e.pageY);
// })


// document.querySelector('.username').addEventListener('change', ()=>{
//   console.log('변경됨');
// })


document.querySelector('.username').addEventListener('input', ()=>{
  console.log('변경됨');
})

//change : 변경(포커스 잃은 후 실행)
//input : 변경될 때마다 실행
//copy : 복사할 때
//paste : 붙여넣기할 때
//cut : 잘라내기할 때