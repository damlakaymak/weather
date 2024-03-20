const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
  
    const cityName = cityInput.value;


    getData(cityName)
   
   
})

function getData(name){
const apı ="1e8df6d90aad60ddd526bc09b8260487";
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apı}&units=metric&lang=tr`


fetch(baseUrl)

.then(res=> res.json())
.then(data =>{


    const{name, sys:{country},main:{temp,feels_like,humidity},weather:[{description}],wind:{speed}}= data

    console.log(data)

    const city = document.querySelector(".city")
const temperatur = document.querySelector(".temp")
const hum= document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const weatherDesc = document.querySelector(".weather")
const feeling = document.querySelector(".feeling")

city.textContent=`${name}, ${country}`;
temperatur.innerText=`${temp.toFixed(0)}°`;
hum.textContent = `Nem:%${humidity}`;
wind.innerHTML=`Rüzgar: ${speed}km/s`;
weatherDesc.innerHTML=`<i>${description.toUpperCase()}</i>`;
feeling.textContent = `Hissedilen : ${feels_like}`
})
.catch(err=> console.log(err))

cityInput.value= "";
cityInput.focus() ;







}