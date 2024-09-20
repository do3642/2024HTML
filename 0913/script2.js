// 기본작성법
// function 함수이름(){함수실행 코드}


let i =10;

function msg(){
  let message = "안녕하세요";
  console.log(message);
  i=5;
}

msg();
console.log(i);
//자바와 같이 전역변수를 지역안에서 바꾸면 나올때 바뀌어짐
//파이썬만 global로 사용해서 전역사용했었음





//함수 선언문
function add(num1, num2){
  return num1 + num2;
}

console.log(add(10,20));

//위 add는 함수 작성한곳 위에서 호출해도 작동한다. 스크립트 작동될때 만들어져있는 함수를 다  등록하고 실제 코드가 작동되기 때문

//함수 표현식
//이런 구조는 익명함수
let mul = function(num1, num2){
  return num1 * num2;
}

console.log(mul(10,20));

//표현식은 변수안에 집어넣는 개념이므로 해당 변수 윗줄에서 호출안됨

let age = 20;
if(age >=20){
    function msg(){
      console.log("성인입니다.");
    }
}else{
  function msg(){
    console.log("미성년입니다.");
  }
}
msg();

//원래 위 함수는 지역함수 느낌으로 호출이 안되야하는데 js의 특성으로 작동이됨
// 엄격모드로 하면 허용안되는듯
//이럴때 함수 표현식으로 위에 변수 선언해서 안에서 변수로 받아오면 상관없이 받을 수 있음


//콜백함수

function yesOrNo(yes,no){
  if(confirm('예 아니오 선택')){
    yes(); //매개변수로 함수호출
    ok(); // 그냥 바깥함수 호출
  }

  else{
    no();
  }
}

function ok(){
  console.log("오케이");
}

function cancel(){
  console.log("노우");
}

// yesOrNo(ok,cancel);


//화살표 함수
let sum = (num1,num2) =>{
  return num1+num2;
}

console.log(sum(10,20));


//객체(object) - 파이썬(딕셔너리), 자바(map)
const user = {
  'name' :'홍길동',
  'age' : 20,
  'math score' : 90
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["math score"]);
//공백이 있는건 권장하지 않으며 공백이 있을땐 대괄호를 써야한다

user.name = "유재석";
console.log(user.name);
//상수로 바꿔보심,js에서 상수는 무조건 대문자로 쓰진 않는다.
//객체같은 형태를 바꿀순 없지만 안에 내용을 바꿀 수 있기 때문
// 원래 user = {} 형태인데 user = 10 이런건 안된단거

let str = 'name';
console.log(user[str]);
// 원래방식이면 user.str로 써야되는데 그렇게 쓰면 str을 변수가아닌 키 값으로 보기 때문에 값을 못찾음
// 그래서 [] 로 쓰면 안에 변수를 넣을 수 있음, 왜냐하면 []안에는 ''로 키값을 넣어야기 때문

str = 'lang';

let study = {
  'str' :'java'
};

console.log(study);


function mkObject(name,age){
  return {
    name,
    age
    // 원래 name : name 이런식으로 썼는데 생략하면 변수이름이 key가 됨
  };
}

let hong = mkObject('홍길동',200);
console.log(hong);


console.log('name' in hong); // true 나옴
// 해당 데이터가 있는지 검색가능 앞에 'name'이 검색할 키


for(let key in hong){
  console.log(key, hong[key]);
}

