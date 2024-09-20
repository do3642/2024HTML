//실제로는 DB에서 해당 정보를 빼와서 처리함
let fruits = [
  {name : 'apple', memo : "빨간색"},
  {name : 'mango', memo : "달달함"},
  {name : 'melon', memo : "맛있다"},
  {name : 'strawberry', memo : "딸기"},
  {name : 'watermelon', memo : "수박"},
];







//박스 제목과 내용 변경
// document.querySelectorAll('.card-title')[0].innerHTML = fruits[0].name;
// document.querySelectorAll('.card-text')[0].innerHTML = fruits[0].memo;

// document.querySelectorAll('.card-img-top')[0].setAttribute('src',"./img/"+fruits[0].name+".jpg");
// document.querySelectorAll('.card-img-top')[0].setAttribute('src',`./img/${fruits[0].name}.jpg`);



// for(let i=0; i<fruits.length;i++){
//   document.querySelectorAll('.card-title')[i].innerHTML = fruits[i].name;
//   document.querySelectorAll('.card-text')[i].innerHTML = fruits[i].memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src',`./img/${fruits[i].name}.jpg`);
// }

// forEach
// fruits.forEach((f,i)=>{ //f는 배열방 , f,i 이런식으로 쓰면 i는  인덱스번호가르킴
//   document.querySelector('.row').insertAdjacentHTML('beforeend',item);
//   document.querySelectorAll('.card-title')[i].innerHTML = f.name;
//   document.querySelectorAll('.card-text')[i].innerHTML = f.memo;
//   document.querySelectorAll('.card-img-top')[i].setAttribute('src',`./img/${fruits[i].name}.jpg`);


// })

fruits.forEach((fruite)=>{
  let item =`<div class="col">
  <div class="card" style="width: 18rem;">
    <img src="./img/${fruite.name}.jpg" class="card-img-top">
    <div class="card-body">

      <h5 class="card-title">${fruite.name}</h5>
      <p class="card-text">${fruite.memo}</p>
      <button class="btn btn-primary cart">담기</button>
    </div>
  </div>
   </div>`;
  //  document.querySelector('.row').insertAdjacentHTML('beforeend',item);
  //jQuery 문법
  $('.row').append(item);
});



//버튼에 이벤트를 심는 방법(이벤트리스너)
// document.querySelectorAll('.cart')[0].addEventListener(이벤트,콜벡함수)
// document.querySelectorAll('.cart')[0]
//             .addEventListener('click',()=>{
//               alert('클릭');
// })

// jQuery문법
$('.cart').on('click',(e) => {
  // js문법;
  //  let name = e.target.previousElementSibling.previousElementSibling.innerHTML;
  //jQuery
  let name = $(e.target).siblings('h5').text();
  //  console.log(name);

  if(localStorage.getItem('name') != null){
    //로컬스토리지에 있는걸 빼와야 함
    let temp = localStorage.getItem('name');

    //배열로 변환
    temp = JSON.parse(temp);

    let isHave = false; //장바구니에 있나 없나를 저장하는 변수
    let index=0; //장바구니에 있으면 해당 인덱스르 저장하는 변수

    temp.forEach((data, i)=>{
      if(data.name === name){
        isHave = true;
        // data.cnt = data.cnt + 1;
        index = i;
        
      }
    });

    if(isHave){
      temp[index].cnt++;
    }else{
      temp.push({'name':name, 'cnt':1});
    }



    localStorage.setItem('name',JSON.stringify(temp));



    // // 새로 장바구니에 담을 상품명을 배열에 추가
    // temp.push(name);

    // localStorage.setItem('name',JSON.stringify(temp));
    

  }else{
    localStorage.setItem('name', JSON.stringify([{'name':name,'cnt':1}]))
  }
  

  //밑은 풀어쓴 형태

  // let names = [name]; //배열로 변환
  // let name_json = JSON.stringify(names); // json으로 변환
  // localStorage.setItem('name',name_json);
  });

//on 클릭 옆에 e는 event의 약자 이벤트 실행된 객체의 정보가 담기게됨




document.querySelector('.btn-remove').addEventListener('click',() => {
  let a = confirm('장바구니를 비우시겠습니까?')

  if(a){
    localStorage.removeItem('name');
  }

});









//로컬 스토리지
//유저에게 부담을 넘길 수 있는 방법
// f12 -> 콘솔..있는 창 에서 어플리케이션 -> 로컬 스토리지 /세션 저장소 -  페이지가 열려있을때만 보관하는 공간
let arr = [1,2,3,4,5];

//배열 arr을 구조를 고정한 상태로 문자열로 변환
//배열 arr을 json형식으로 변환
let arr_json = JSON.stringify(arr);

// console.log(arr_json)

// localStorage.setItem(키,벨류);
// 변환 arr을 로컬스토리지에 저장
localStorage.setItem('arr',arr_json);

//로컬스토리지에서 arr을 빼옴(json)
let arr_local = localStorage.getItem('arr'); //문자열로 꺼내지는데 [] 씌어진채임 
let arr_parse = JSON.parse(arr_local); //문자로꺼내진걸 parse해서 []문자열로 인식하던걸 배열로 다시 바꿈
//json인 arr데이터를 js형식에 맞게 변환 문자열 ->배열로 변환

// console.log(arr_parse);
// console.log(arr_parse[0]);

//콘솔창에
// localStorage.setItem('name','hong');
// localStorage.getItem('name'); 해당 키에대한 벨류 리턴됨
// localStorage.getItem('arr'); 리스트로 넣었지만 문자열 '1,2,3,4,5' 리턴됨
//기존에 있던 키를 set입력하면 수정됨
// localStorage.removeItem('name'); 해당 키 자체 삭제됨
// localStorage.setItem('fruit',fruits); 객체가 들어감 반환은 문자열로

