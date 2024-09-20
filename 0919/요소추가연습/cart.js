
let list = localStorage.getItem('name');
list = JSON.parse(list);

// console.log(list);

list.forEach((data) => {
  $('.list').append(`<div>${data.name} ${data.cnt}개</div>`);
});