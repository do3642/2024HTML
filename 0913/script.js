

// console.log("hello");
// document.write("h2")
//변수
let aa = 10;
//상수
const B = 20;



//js의 산술연산은 안전함
//자바나 파이썬의 경우는 잘못된 연산일때 에러를 출력 및 프로그램 종료

console.log(10/0);
//잘못된 연산이어도 출력됨 (이건 Infinity로 출력됨) 숫자형임
console.log(typeof Infinity);

console.log("asds" / 20);
// 에러 대신 NaN 출력됨
console.log(typeof(NaN)); // 특수 숫자값



let msg = "js";
// "" , '' , `` 문자 작성할때 쓰는 방법
// console.log("hello" + msg);
// console.log('hello' + msg);
// console.log(`hello${msg}`);
// 버전에 따라서 ``는 안될 수도 있음
// ``는  +도 되고 파이썬의 f스트링 처럼 $로 연결할 수 도 있음

let a = null;
//자바에서는 참조할 객체가 없을 때 null , Js는 그냥 비어있다,알수없다


//알림창 - (모달) - 단점: 위치,디자인을 못바꿈
// alert('aaa');
// console.log('alert 실행 후');

// 프롬프트는 return값이 있고 반환받는건 string형
// a = prompt('프롬프트',200); //쉼표찍으면 기본값 넣어주기
// console.log(a);
// Number(a)형변환

// let bbb = confirm("예 아니오")
// console.log(bbb)


// 자료형 변환
// String(11) :문자로 변환
// Number("11") :숫자로 변환
console.log("11"+"2"); // 이건 112로 문자열 합쳐짐
console.log("11"-"2"); // 이건 계산도 되고 숫자로 타입도 바뀜

let n;
console.log(Number(n));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));


console.log(Boolean("asdasd")); //내용이 있냐 없냐로 판단 true 출력됨
console.log(Boolean("")); //내용이 있냐 없냐로 판단 false 출력됨


console.log("=============");
// 논리연산자 && || !

console.log(1 == "1"); //타입 구분 없이 비교
console.log(1 === "1"); //타입 구분해서 비교(엄격버전)



console.log("=============");


//조건문

// a = Number( prompt("나이를 입력하세요."));
//JS는 문자열로 받아도 연산처리가 되지만 정확하게 하기 위해 형변환
if(a >=20){
  console.log("성인입니다.");
}else{
  console.log("청소년 입니다.");
}

a >= 20 ? console.log("성인입니다.") :  console.log("청소년 입니다.");


// switch~case문 (대신 자료형 일치해야함)
switch(a){
  case 1:
    break;
  case 2:
    break;
  default:
}

//반복문
while(a >=20){}
for(let i = 0; i<5;i++){
  console.log(i);
}


// 반복문안 break; //자바랑 똑같음