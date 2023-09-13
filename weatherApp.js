let temperature = document.querySelector(".temperature");
let windspeed = document.querySelector(".windspeed");
let humidity  = document.querySelector(".humidity");
let searchbar = document.querySelector(".searchbar");
let name = document.querySelector(".cityname");
let changeImages = document.querySelector(".allimages");

 let triggerButton = document.querySelector(".btn");
 triggerButton.addEventListener('click', function(){
  
     usingApi(searchbar.value);
    

 })

    
    let apikey = "e6f99081e9bed0a8a6370fef5eae3439";
    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    async function usingApi(city){
        let fetching = await fetch(url + city +`&appid=${apikey}`)
       let response = await fetching.json();
          console.log(response);
       
        
               function hel(res){
                    // let str  = "Invalid city name";
                    if(res.cod == "404")
                    {
                      name.innerHTML = "Invalid City";
                    }
            
               }
          hel(response);
        
   // Temperature
      let cityTemp =  (response.main.temp);
       temperature.innerHTML =Math.round(cityTemp) + '°C';
       // Wind speed
        let speed =  response.wind.speed;
        windspeed.innerHTML = speed + "km per hour"
        //Humidity
        let humi = response.main.humidity;
        humidity.innerHTML = humi + "% Humidity"
        // city name
       
          let cityname = response.name;
          name.innerHTML = cityname;  
         
     
          // name.innerHTML = "Error "
     
          let haze = response.weather[0].main;
          console.log(haze);
          if(haze === 'Clouds')
           {
                changeImages.src = "weather-app-img/images/clouds.png";
           }
          else if(haze === 'Mist')
           {
                changeImages.src = "weather-app-img/images/mist.png";
           }
           else if(haze === 'Rain')
           {
                changeImages.src = "weather-app-img/images/rain.png";
           }
           else if(haze === 'Snow')
           {
                changeImages.src = "weather-app-img/images/drizzle.png";
           }
    
        }
     
         
      

    usingApi();
    
   
    