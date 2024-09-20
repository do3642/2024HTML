document.querySelector('a').addEventListener('click', (e) =>{
  e.preventDefault(); // 기본동작 막기  
  e.stopPropagation(); //버블링 막기
  alert('a태그');
})