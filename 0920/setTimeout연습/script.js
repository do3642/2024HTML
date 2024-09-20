//정해진 시간뒤에 콜백함수가 실행됨
// setTimeout(콜백함수,ms);
//정해진 시간마다 콜백함수가 반복실행됨
// setInterval(콜백함수,시간);



let time =5;

let interval = setInterval(()=>{
  time --;
  document.querySelector('.time').innerHTML = time;
},1000);

setTimeout(() =>{
  document.querySelector('.alert').style.display = 'none';
  clearInterval(interval); // 위에 담은 인터벌 변수
},5000);



document.querySelector('.btn').addEventListener('click',()=>{
  
  setTimeout(()=>{
    document.querySelectorAll('.alert')[1].style.display='none';
  },5000);


})

console.log('그냥 추가함');