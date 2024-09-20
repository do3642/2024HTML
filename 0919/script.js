
let user = {
  name: 'hong',
  age : 20
};


user.hello = function(){
  console.log('hello');
};

user.hello();


function hi() {
  console.log('hi');
}

user.hello = hi;
user.hello();


user = {
  name: 'hong',
  msg() {
    console.log(this.name);
  }
};
// msg : function(){
//  console.log('msg'); 위 msg(){}와 같은 의미 
//}

// 이런 키,벨류 넣고 ,를 미리 넣는식으로도 활용한다하심

// user.msg();
// user.msg 는 this.name으로 썼는데 this는 자기객체를 가르킴
//그래서 이거는 this.name = user.name으로 보면됨

let kim = user;
user = null;
kim.msg();
// msg()함수안에 user.name 하면 user가 null이기 때문에 에러뜨는데
// this로 하면 kim을 가르키기 때문에 msg가 출력된다.

//user와 kim은 같은 주소값을 가지고 사용되는데
// user에 null을 할 때 같은 주소의 객체를 null로 바꾸는게 아니라 user을 null시키는것
// 기존에는 user이 null바뀌면 kim도 null이 될줄 앎



kim= {
  name:'kim',
  age: 20
}

let park = {
  name :'park',
  age: 30
}

function himsg() {
  console.log(this.name + "님 안녕하세요");
}

kim.fn = himsg;
himsg();
kim.fn();
park.fn = himsg;
park.fn();
//this와 객체 특성을 이용해 각각 이름으로 호출할 수 있음


//new, 생성자
// 함수명 첫 글자가 대문자
// 생성할 땐 new 키워드로 생성

//기존 방식
function createUser(name,age){
  user = {
    name,
    age
  }
  return user;
}
kim = createUser('홍길동',40);
console.log(kim);


function User(name,age){
  this.name = name;
  this.age = age;
  this.hi = function(){
    console.log(`${this.name} 안녕`);
  }
}

let lee = new User('lee',40);
console.log(lee);





//--------------------------------------------------------
//DOM
// JS는 HTML의 요소와 속성 추가,수정,삭제 가능
//css 추가,수정,삭제 가능
//이벤트 추가 수정 삭제


// document.body.style.background='red';

