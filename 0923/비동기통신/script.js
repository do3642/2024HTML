document.querySelector('.get-btn').addEventListener('click', ()=>{



  const xhr = new XMLHttpRequest();
  //비동기 통신 해주는 객체
  
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  //요청 방식 세팅 (요청메서드, 요청url)
  
  xhr.setRequestHeader('content-type', "application/json");
  // 요청했을때 보내줄 데이터 타입
  
  xhr.send();
  
  xhr.onload = () =>{
    //200d이면 정상
    if(xhr.status === 200){
      const response  = JSON.parse(xhr.response);
      console.log(response);
    }else{
      console.log(xhr.status);
    }
  }


});


//댓글이 이런거?
document.querySelector('.put-btn').addEventListener('click', ()=>{
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/1');
  xhr.setRequestHeader("content-type", "application/json; charset=UTF-8");
  let data = {
    title : 'abc',
    body : 'kkk',
    userId : 1
  };
  
  xhr.send(JSON.stringify(data));
  xhr.onload = () =>{
    if(xhr.status === 200){
      const response  = JSON.parse(xhr.response);
      console.log(response);
    }else{
      console.log(xhr.status);
    }
  }


})


document.querySelector('.fetch').addEventListener('click', ()=>{
  //메서드 생략하면 get, Promise 방식
  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response)=>{ // featch 뒤에 쓰임
    return response.json();
  }).then((data)=>{
    console.log(data);
  }).catch((error)=>{
      console.log(error);
  })
  
});


document.querySelector('.fetch2').addEventListener('click', ()=>{

  let data = {
    title : 'abc',
    body : 'rfr',
    userId : 1
  };

  //featch(요청주소,{오브젝트})
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "post",
    body: JSON.stringify(data),
    headers:{
      "content-type" : "application/json; charset=utf-8",
    }
  }).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  })

});




document.querySelector('.jq').addEventListener('click',()=>{
  $.ajax({ //$.get(), $.post() 이것도 됨
    url:'https://jsonplaceholder.typicode.com/posts/1',
    type: 'get',
    success: function(response){
      console.log(response);
    },
    error: function(error){
      console.log(error);
    }
  })
});







