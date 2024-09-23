// const regex = /정규식/;
const regex = /\d{3}-\d{4}-\d{4}/; //전화번호 정규식 \d 숫자를 의미 {} 개수를의미

let tel = '010-1234-5678';
let result = regex.test(tel);

// console.log(result);
//복잡한 구조에 조건식을 만들고자 할 경우
//정규식을 이용하면 간단하게 처리 가능함
//정규식 생성
// /패턴/플래그
// ex) const reget = /[0-9]/i;
// i플래그는 대,소문자 구별하지말라
// ex2) const regex = new RegExp('/[0-9]/i');

//정규식.test("검사할데이터")
//정규식에 만족하면 true 아니면 false
const regex2 = /abc/;
result = regex2.test("가나다 abc 1234");
// console.log(result);

let text = "가나다 abc 1234";
result = text.match(regex2);
console.log(result[0]);

//파이썬과 같게 문자열 수정
result = text.replace(regex2, "x");
console.log(result);

//flag(플래그)
// i: 대소문자 구분안함
// g: 문자열 전체에서 검색
// m: 행이 변경되도 검색

text = 'abcabc';
result = text.match(/a/g);  
console.log(result);
