const ab = document.getElementById('ab');

// function show() {
//   ab.style.display = 'block';
// }

// function hide(){
//   ab.style.display = 'none';
// }

function showHide(value){
  ab.style.display = value;
}


const alertBox = document.querySelectorAll('.alert-box')[1];

function showBox(msg){
  // alertBox.style.display = "block";
  // alertBox.innerHTML = msg;

  // jQuery 문법
  // $('.alert-box').eq(1).css('속성명', '속성값')
  $('.alert-box').eq(1).css('display', 'block');
  $('.alert-box').eq(1).html(msg);

}

function closeBox(){
  alertBox.style.display = 'none';
}