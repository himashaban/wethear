////////////////////set/////////////////////////////////
let SearchInput = document.getElementById("search");
let buttonn = document.getElementById("submit");
let searchValue = "";
let cityData = document.getElementById("city");
let conditionText = document.getElementById("conditionText");
let conditionIcon = document.getElementById("conditionIcon");
let todayDegree = document.getElementById("todayDegree");
let winds =document.getElementById('wind');
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
const todaysDate = document.getElementById("todaysDate");
const todayText = document.getElementById("today");
const tomorrowText = document.getElementById("tomorow");
const thedayafterText = document.getElementById("thedayafter");
 let tomorowImage = document.getElementById("tomorowImage");
const tomorowMax=document.getElementById('tomorowMax')
let tomorowMin = document.getElementById("tomorowMin");
const tomorowCond = document.getElementById("tomorowCond");
let lastImg = document.getElementById("lastImg");
const lastMax = document.getElementById("lastMax");
const lastMin = document.getElementById("lastMin");
const lastCond = document.getElementById("lastCond");

////////////////////////////////////////////////////////////////////////////

searchResult();


function searchResult() {
  
 
  SearchInput.addEventListener("input", async function () {
      searchValue = SearchInput.value;
  console.log("search value:", searchValue); 
     let result = await fetch(
       ` http://api.weatherapi.com/v1/forecast.json?key=56bba95450d24ac3b4920045241506&q=${searchValue}&days=3&aqi=no&alerts=no `
     );
     let response = await result.json();
     let city = response.location.name;
     console.log(response);

     conditionText.innerHTML = response.current.condition.text;
     conditionIcon.src = response.current.condition.icon;
     todayDegree.innerHTML = response.current.temp_c + "°C"; //degree
     winds.innerHTML = response.current.wind_kph + " Km/h"; //winds
     humidity.innerHTML = response.current.humidity + "%";
     //////////////////////////wind dirictions/////////////////////////////////////////
     const windDiriction = response.current.wind_dir;
     const diriction = windDiriction.charAt(0);
     //  console.log('dir=====>'+diriction);
     todaysDate.innerHTML = response.forecast.forecastday[0].date;

     if (diriction == "N") {
       pressure.innerHTML = "North";
     } else if (diriction == "NE") {
       pressure.innerHTML = "North East";
     } else if (diriction == "E") {
       pressure.innerHTML = "East";
     } else if (diriction == "W") {
       pressure.innerHTML = "West";
     } else {
       pressure.innerHTML = "South";
     }

     cityData.innerHTML = city;
     ///////////////to get todays day name //////////////////
     let today = response.forecast.forecastday[0].date;
     let tomorow = response.forecast.forecastday[1].date;
     let thedayafter = response.forecast.forecastday[2].date;
     const dateToCheck = new Date(today); // You can specify any date here
     const dateToCheck1 = new Date(tomorow); // You can specify any date here
     const dateToCheck2 = new Date(thedayafter); // You can specify any date here

     // Get the day name of the specified date
     const todayName = new Intl.DateTimeFormat("en-US", {
       weekday: "long",
     }).format(dateToCheck);
     const tomorrowName = new Intl.DateTimeFormat("en-US", {
       weekday: "long",
     }).format(dateToCheck1);
     const thedayafterName = new Intl.DateTimeFormat("en-US", {
       weekday: "long",
     }).format(dateToCheck2);

     todayText.innerHTML = todayName;
     tomorrowText.innerHTML = tomorrowName;
     thedayafterText.innerHTML = thedayafterName;

     /////////////////////////////tomorow section /////////////////
     console.log(response.forecast.forecastday[1].day.condition.text);

     tomorowImage.src = response.forecast.forecastday[1].day.condition.icon;
     tomorowMax.innerHTML =
       response.forecast.forecastday[1].day.maxtemp_c + "°C";
     tomorowMin.innerHTML =
       response.forecast.forecastday[1].day.mintemp_c + "°C";
     tomorowCond.innerHTML =
       response.forecast.forecastday[1].day.condition.text;

     //////////////////the day after //////////////////////////////////////////

     lastImg.src = response.forecast.forecastday[2].day.condition.icon;
     lastMax.innerHTML = response.forecast.forecastday[2].day.maxtemp_c + "°C";
     lastMin.innerHTML = response.forecast.forecastday[2].day.mintemp_c + "°C";
     lastCond.innerHTML = response.forecast.forecastday[2].day.condition.text;
   });
}

async function GetWeather() {
  buttonn.addEventListener("click", async function () {
    searchResult(); // Call the searchResult function to update the searchValue
    let result = await fetch(
      ` http://api.weatherapi.com/v1/forecast.json?key=56bba95450d24ac3b4920045241506&q=${searchValue}&days=3&aqi=no&alerts=no `
    );
    let response = await result.json();
    let city = response.location.name;
  console.log(response);





    conditionText.innerHTML = response.current.condition.text;
    conditionIcon.src = response.current.condition.icon;
    todayDegree.innerHTML = response.current.temp_c + "°C"; //degree
    winds.innerHTML = response.current.wind_kph + " Km/h"; //winds
    humidity.innerHTML = response.current.humidity + "%";
    //////////////////////////wind dirictions/////////////////////////////////////////
    const windDiriction = response.current.wind_dir;
    const diriction = windDiriction.charAt(0);
    //  console.log('dir=====>'+diriction);
    todaysDate.innerHTML = response.forecast.forecastday[0].date;
  
    if (diriction == "N") {
      pressure.innerHTML = "North";
    } else if (diriction == "NE") {
      pressure.innerHTML = "North East";
    } else if (diriction == "E") {
      pressure.innerHTML = "East";
    } else if (diriction == "W") {
      pressure.innerHTML = "West";
    } else {
      pressure.innerHTML = "South";
    }

    cityData.innerHTML = city;
    ///////////////to get todays day name //////////////////
    let today = response.forecast.forecastday[0].date;
    let tomorow = response.forecast.forecastday[1].date;
    let thedayafter = response.forecast.forecastday[2].date;
    const dateToCheck = new Date(today); // You can specify any date here
    const dateToCheck1 = new Date(tomorow); // You can specify any date here
    const dateToCheck2 = new Date(thedayafter); // You can specify any date here

    // Get the day name of the specified date
    const todayName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateToCheck);
    const tomorrowName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateToCheck1);
    const thedayafterName = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(dateToCheck2);
    
    todayText.innerHTML = todayName;
    tomorrowText.innerHTML = tomorrowName;
    thedayafterText.innerHTML = thedayafterName;

/////////////////////////////tomorow section /////////////////
console.log(response.forecast.forecastday[1].day.condition.text);

 tomorowImage.src = response.forecast.forecastday[1].day.condition.icon;
 tomorowMax.innerHTML = response.forecast.forecastday[1].day.maxtemp_c + "°C";
 tomorowMin.innerHTML = response.forecast.forecastday[1].day.mintemp_c + "°C";
 tomorowCond.innerHTML = response.forecast.forecastday[1].day.condition.text;

//////////////////the day after //////////////////////////////////////////

lastImg.src = response.forecast.forecastday[2].day.condition.icon;
lastMax.innerHTML = response.forecast.forecastday[2].day.maxtemp_c + "°C";
lastMin.innerHTML = response.forecast.forecastday[2].day.mintemp_c + "°C";
lastCond.innerHTML = response.forecast.forecastday[2].day.condition.text;


  });
}


GetWeather();
