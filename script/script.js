const apiKey = "434c81f1f32864622d311161070ec456";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";


async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;

}

checkWeather();


