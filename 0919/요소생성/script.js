
//div 태그 생성
let divTag = document.createElement('div');

//텍스트 생성
let textNode = document.createTextNode('텍스트노드임');

//클래스 설정
divTag.className = 'alert';


//이너html은 태그도 넣을 수 있음
divTag.innerHTML = '<b>강조</b> 생성된 div태그임';

//append : 맨뒤에 추가
//prepend : 맨 앞에 추가
// before : 이전에 추가
// after : 이후에 추가
document.body.append(divTag);

const ol = document.querySelector('#ol');

ol.before('이전');
ol.after('이후');

const liTag = document.createElement('li');
liTag.innerHTML = 'preped';
ol.prepend(liTag);

liTag.innerHTML = 'append';
ol.append(liTag);


const div = document.querySelector('#div');

//beforebegin : 해당 태그 앞에
// afterbegin : 해당 태그 첫번째 자식
//beforeend : 해당 태그 마지막 자식
// afterend : 해당 태그 뒤에
div.insertAdjacentHTML('beforebegin','<p>앞에</p>');
div.insertAdjacentHTML('afterbegin','<p>해당 태그 첫번째 자식</p>');
div.insertAdjacentHTML('beforeend','<p>해당 태그 마지막 자식</p>');
div.insertAdjacentHTML('afterend','<p>뒤에</p>');


//태그 지우기
// divTag.remove();  // 추가로 넣은 div(divTag) 마지막에 있는거부터 지움
// setTimeout(콜백함수,시간); 함수를 호출해도 되고 직접 작성해도됨
setTimeout(()=> {
  divTag.remove();
},3000);


//이동
// id는 그냥 호출도 됨
//태그 삽입 함수들은 기본적으로 기존 태그를 삭제한 후 해당 위치로 변경
second.after(first);


//태그 복사
//true나 false가 괄호에 들어감(자식노드들을 어떻게 할거냐 선택사항)
//true = 자손들까지 복사 / false : 해당 태그만 복사
const ol2 = ol.cloneNode(true); 
document.body.append(ol2);