$('.btn1').on('click', () => {
  $('.carousel').css('transform', 'translateX(0');
  boxNo =1;
});

$('.btn2').on('click', () => {
  $('.carousel').css('transform', 'translateX(-100vw');
  boxNo =2;

});
$('.btn3').on('click', () => {
  $('.carousel').css('transform', 'translateX(-200vw');
  boxNo =3;
});

$('.btn').on('click', (e) => {
  let no = e.target.dataset.num;
  $('.carousel').css('transform', 'translateX(-'+no+'00vw)');
  boxNo = parseInt(no) + 1;
  console.log(boxNo);
});



let a = 0;
let boxNo = 1;
$('.next').on('click', () => {
  // if(a != -200){
  //   a -=100;
  // }
  // $('.carousel').css('transform', 'translateX('+a+'vw)');

  
  // if(boxNo === 1 ){
    if(boxNo <3){
      if(boxNo== -1){
        boxNo = 1;
      }
      $('.carousel').css('transform', 'translateX(-'+boxNo+'00vw)');
      boxNo++;
    }
  console.log(boxNo);

  // } else if (boxNo === 2){
    // $('.carousel').css('transform', 'translateX(-200vw');
    // boxNo++;
  // }
  
});

$('.prev').on('click', () => {
  
  // if(a != 0){
  //   a +=100;
  // }
  // $('.carousel').css('transform', 'translateX('+a+'vw)');
  // if(boxNo === 1 ){
  //   $('.carousel').css('transform', 'translateX(-100vw');
  //   boxNo++;
  // } else if (boxNo === 2){
  //   $('.carousel').css('transform', 'translateX(-200vw');
  //   boxNo++;
  // }
 
  console.log(boxNo);
  
  if(boxNo != 1){
    $('.carousel').css('transform', `translateX(-${boxNo-2}00vw)`);
    boxNo--;
  }

  console.log(boxNo);

  
});
