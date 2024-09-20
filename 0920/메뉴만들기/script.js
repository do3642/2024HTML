const hamBtn = document.querySelector('.navbar-toggler');

hamBtn.addEventListener('click',() =>{
  //js코드
  // document.querySelector('.list-group').classList.toggle('show');
  
  //jQuery문법
  $('.list-group').toggleClass('show');
});



document.querySelector('#write').addEventListener('click',() =>{
  // document.querySelector('.black-bg').classList.add('visi');
  $('.black-bg').fadeIn();
});

$('#close').on('click', () => {
  // $('.black-bg').removeClass('visi');
  $('.black-bg').fadeOut();

});


const modeBtn = document.querySelector('#mode');
modeBtn.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
  console.log(modeBtn.value);

  if(modeBtn.value == "다크모드"){
    modeBtn.setAttribute('value','라이트모드');
   
  }else{
    modeBtn.setAttribute('value','다크모드');
   
  }
  // modeBtn.value == "다크모드" ? modeBtn.setAttribute('value','라이트모드'):  modeBtn.setAttribute('value','다크모드');
  
  

})