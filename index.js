/// 1st step ye hai
let input = document.querySelector(".input-box");
const searchbtn=document.getElementById("search-btn");
const weather_img= document.querySelector(".weather-img");
const temperature= document.querySelector(".temperature");
const description= document.querySelector(".description");

const humidity =document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");

const loc_not_found=document.querySelector(".loc-not-found");

// hum chahte hai k jab error aaye ye weather body show na ho
const weather_body=document.querySelector(".weather-body");
const weather_detail=document.querySelector(".weather-detail");



// 3rd step ye hai ----is project ko banane ke 3 steps maine explain kiye hai --k pehle konsa step karna hai
async function CheckWeather(city){
    const API_key=`5b66f0b89c1eef2e2ef514f42ccfdbb2`;
       let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;

       let data= await fetch(`${url}`).then(response=>response.json());
       console.log(data);

// agar humne koi city ka name nahi diya tou ow hume error dega --isko handle karne k liye is tarah karenge
if(data.cod==='404'){
   // mai chahta hu jab error aaye tab ye image show ho
   loc_not_found.style.display='flex';
   weather_body.style.display="none"
   weather_detail.style.display="none"
    return;
}

weather_body.style.display='flex';
weather_detail.style.display='flex';


       temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°c`;
       humidity.innerHTML=`${data.main.humidity}`;
       wind_speed.innerHTML=`${data.wind.speed}Km/Hr`;
      description.innerHTML=`${data.weather[0].description}`;

      switch(data.weather[0].main){
        case 'Clouds':
            weather_img.src='Images/cloud.png';
            break;
          case 'Clear':
            weather_img.src='Images/clear.png'
            break;
             case 'Rain':
            weather_img.src='Images/rain.png'
            break;
             case 'Mist':
            weather_img.src='Images/mist.png'
            break;
             case 'Snow':
            weather_img.src='Images/snow.png'
            break;
      }

}


//2nd step ye hai
// yaha hum chate hai k searchbutton par click karte saath hi hum jo input OR Search mai jis city ka name hum  dete hai uska weather ye hume dede.
searchbtn.addEventListener('click',()=>{
    CheckWeather(input.value);
})