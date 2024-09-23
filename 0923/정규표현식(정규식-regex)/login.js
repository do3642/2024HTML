// 정규식 조건
//숫자,영문 포함 8~20글자
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;


//확인버튼
const idBtn = document.querySelector('#id_confirm');
const pwBtn = document.querySelector('#pw_confirm');
const emailBtn = document.querySelector('#email_confirm');
const phoneBtn = document.querySelector('#phone_confirm');

//입력받은 데이터 정규식에 안맞으면 노출하는 데이터
const  idCheck = document.querySelector('.id_input_check');
const  pwCheck = document.querySelector('.pw_input_check');
const  emailCheck = document.querySelector('.email_input_check');
const  phoneCheck = document.querySelector('.phone_input_check');

//입력 받은 데이터
const idInput = document.querySelector('#id_txt');
const pwInput = document.querySelector('#pw_txt');
const emailInput = document.querySelector('#email_txt');
const phoneInput = document.querySelector('#phone_txt');



idBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  console.log(idInput.value);
});
