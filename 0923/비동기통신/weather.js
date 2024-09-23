const APIKEY = '2d46353f25735e02874b7e4010f32a4d';
const nameSpan = document.querySelector('#weather span:first-child');
const tempSpan = document.querySelector('#weather span:last-child');

function connectGeo(position){
  // console.log('위치 연결');
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(position);
  console.log(lat,lon);
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=kr&units=metric`
  console.log(URL);

  fetch(URL).then((response)=> response.json())
    .then((data)=>{
      // console.log(data);
      // console.log(`현재장소: `+data.name);
      // console.log(`현재기온: `+data.main.temp);
      // console.log(`현재날씨: `+data.weather[0].description);
      const temp = data.main.temp;
      const name = data.name;
      const desc = data.weather[0].description;
      
      nameSpan.innerHTML= name;
      tempSpan.innerHTML= `${temp}도 / ${desc}`;
    }).catch((error)=>{
      console.log(error);
    })

}

function errorGeo() {
  console.log('위치 연결 오류');
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);



