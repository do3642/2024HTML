// const tabBtns = document.querySelectorAll('.tab-button');
// const tabCon = document.querySelectorAll('.tab-content');


// for(let i=0; i<tabBtns.length;i++){
//   tabBtns[i].addEventListener('click',() =>{
//     for(let i=0; i<tabBtns.length;i++){
//       tabBtns[i].classList.remove('select');
//       tabCon[i].classList.remove('show');
//     }
//     tabBtns[i].classList.add('select');
//     tabCon[i].classList.add('show');
//   })
  
// }


// const tabBtns = $('.tab-button');
// const tabCon = $('.tab-content');
// $(tabBtns).on('click', (e) => {
//   $(tabBtns).removeClass('select');
//   $(tabCon).removeClass('show');

//   let i = e.target.dataset.num;
//   $(tabBtns).eq(i).addClass('select');
//   $(tabCon).eq(i).addClass('show');
// })



const tabBtns = document.querySelectorAll('.tab-button');
const tabCon = document.querySelectorAll('.tab-content');
const tabBtnBox = document.querySelector('.list');


tabBtnBox.addEventListener('click',function(e){
  let i = e.target.dataset.num;
  removeClass();
  e.target.classList.add('select');
  tabCon[i].classList.add('show');
  
})

function removeClass(){
  for(let i = 0; i < tabBtns.length; i++){
    tabBtns[i].classList.remove('select');
    tabCon[i].classList.remove('show');
  }
    
}