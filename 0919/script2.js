console.log(document.body.childNodes);
// h1도 리스트에 있음

for(let i=0; i<document.body.childNodes.length;i++){
  // console.log(document.body.childNodes[i]);
}
//for로 찍으니깐 h1이 안읽혀옴

console.log(document.body.parentNode);
//부모를 찾는법 body의 부모인 html이 찍힘

console.log(document.body.nextSibling);
//형제 노드 이전과 이후로 찍을 수 있고 다음 형제는 없기 때문에 null나옴

console.log(document.body.previousSibling);
//이전 형제 노드

for(let node of document.body.childNodes){
  // console.log(node);
}
// 노드들 반복할때 보통 in 안쓰고 of 씀 (상황에 따라 다름)


let s = document.getElementById('start');
// console.log(s);
s.style.background = 'red';
//보통은 한줄로 안씀
// 쓰기에 편해서 그런것도 있지만 변수에 담지않고 douc..get..로만 쓰면 쓸때마다 해당 태그를 찾아서
// 데이터 처리가 느려질 수 있다.



const li = document.querySelectorAll('ul > li');
console.log(li);
//console.log(li[0]); 리스트 형태니깐 이렇게 호출도 가능함
li[0].innerHTML = '<a href="">123</a>';
// 콘솔에 치면 출력이 되는데 =로 쓰면 내용이 바뀜

const end = document.querySelector('.end');
console.log(end);