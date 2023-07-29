//Capturar los elementos del DOM, para modificar posteriormente

let container = document.getElementById("container");
let searchForm = document.getElementById("search_submit");
let searchInput = document.getElementById("search_input");
let temperatureDegrees = document.getElementById("degreeNumber");
let weatherIcon = document.getElementById("logo-weather");
let temperatureDescription = document.getElementById("description");
let timeZone = document.getElementById("timezone");
let date = document.getElementById("date");
let min = document.getElementById("min");
let max = document.getElementById("max");
let latitude;
let longitude;
let btn = document.getElementById("btn-search");
let numberWind = document.getElementById("numberwind");
let numberHumid = document.getElementById("numberhumid");
let numberMiles = document.getElementById("numbermiles");
let numberNub = document.getElementById("numbernub");
let tempMaxc1 = document.getElementById("degreeNumber_c1_max");
let tempMinc1 = document.getElementById("degreeNumber_c1_min");
let tempMaxc2 = document.getElementById("degreeNumber_c2_max");
let tempMinc2 = document.getElementById("degreeNumber_c2_min");
let tempMaxc3 = document.getElementById("degreeNumber_c3_max");
let tempMinc3 = document.getElementById("degreeNumber_c3_min");
let tempMaxc4 = document.getElementById("degreeNumber_c4_max");
let tempMinc4 = document.getElementById("degreeNumber_c4_min");
let tempMaxc5 = document.getElementById("degreeNumber_c5_max");
let tempMinc5 = document.getElementById("degreeNumber_c5_min");
let weatherIconc1 = document.getElementById("logo-weather_c1");
let weatherIconc2 = document.getElementById("logo-weather_c2");
let weatherIconc3 = document.getElementById("logo-weather_c3");
let weatherIconc4 = document.getElementById("logo-weather_c4");
let weatherIconc5 = document.getElementById("logo-weather_c5");
let diaPronostico0 = document.getElementById("dia-pronostico0");
let diaPronostico1 = document.getElementById("dia-pronostico1");
let diaPronostico2 = document.getElementById("dia-pronostico2");
let diaPronostico3 = document.getElementById("dia-pronostico3");
let diaPronostico4 = document.getElementById("dia-pronostico4");

//Declarar funciones secundarias

const displayCurrentData = (obj, city) => {
    //Actualizar temperatura
    temperatureDegrees.textContent = Math.floor(obj.main.temp);
    //Actualizar ciudad y convertir primer caracter en mayuscula
    timeZone.textContent = city.charAt(0).toUpperCase() + city.slice(1);
    //Cambiar el logo del clima
    const icon = obj.weather[0].icon;
    weatherIcon.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' id="logo-clima">`;
    //Descripcion del clima
    temperatureDescription.textContent = obj.weather[0].description.charAt(0).toUpperCase() + obj.weather[0].description.slice(1);
    //Velocidad del viento
    numberWind.textContent = obj.wind.speed;
    //Porcentaje de humedad
    numberHumid.textContent = obj.main.humidity;
    //numero de visibilidad
    const number = parseInt(obj.visibility) / 1000
    numberMiles.textContent = number;
    //Porcentaje de nubosidad
    numberNub.textContent = obj.clouds.all;
}

const displayForecastData = (obj) => {
    //Actualizar temperatura
    actualizarTemp(obj);
    //Cambiar el logo del clima
    mostrarIcono(obj);
    //Descripcion del día
    mostrarDias(obj);
}

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    getWeatherData(searchInput.value)
})

function actualizarTemp(obj) {
    tempMaxc1.textContent = obj.list[0].main.temp_max;
    tempMinc1.textContent = obj.list[0].main.temp_min;
    tempMaxc2.textContent = obj.list[1].main.temp_max;
    tempMinc2.textContent = obj.list[1].main.temp_min;
    tempMaxc3.textContent = obj.list[2].main.temp_max;
    tempMinc3.textContent = obj.list[2].main.temp_min;
    tempMaxc4.textContent = obj.list[3].main.temp_max;
    tempMinc4.textContent = obj.list[3].main.temp_min;
    tempMaxc5.textContent = obj.list[4].main.temp_max;
    tempMinc5.textContent = obj.list[4].main.temp_min;
}

function mostrarIcono(obj) {
    let icon = obj.list[0].weather[0].icon;
    weatherIconc1.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' id="logo-clima-c">`;
    icon = obj.list[1].weather[0].icon;
    weatherIconc2.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' id="logo-clima-c">`;
    icon = obj.list[2].weather[0].icon;
    weatherIconc3.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' id="logo-clima-c">`;
    icon = obj.list[3].weather[0].icon;
    weatherIconc4.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' id="logo-clima-c">`;
    icon = obj.list[4].weather[0].icon;
    weatherIconc5.innerHTML = `<img src='https://openweathermap.org/img/wn/${icon}@2x.png' id="logo-clima-c">`;
}

function mostrarDias(obj) {
    let fecha = convertHours(obj.list[0].dt_txt);
    diaPronostico0.textContent = fecha;
    fecha = convertHours(obj.list[1].dt_txt);
    diaPronostico1.textContent = fecha;
    fecha = convertHours(obj.list[2].dt_txt);
    diaPronostico2.textContent = fecha;
    fecha = convertHours(obj.list[3].dt_txt);
    diaPronostico3.textContent = fecha;
    fecha = convertHours(obj.list[4].dt_txt);
    diaPronostico4.textContent = fecha;

    //Dia de hoy
    fecha = convertDateFormat(obj.list[0].dt_txt);
    const timezoneOffsetSeconds = obj.city.timezone; // Valor en segundos (ejemplo 7200 para +2 horas)

    // Convertir el desplazamiento de la zona horaria a milisegundos
    const timezoneOffsetMilliseconds = timezoneOffsetSeconds * 3500;

    // Crear un objeto Date en formato UTC
    const fechaUTC = new Date(`${fecha}T00:00:00Z`);

    // Ajustar la fecha según el desplazamiento de la zona horaria
    const fechaLocal = new Date(fechaUTC.getTime() + timezoneOffsetMilliseconds);
    // Obtener el formato deseado con el día de la semana en palabras
    const fechaFormato = fechaLocal.toLocaleDateString('es-Es', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    date.textContent = fechaFormato;
}

function convertHours(string) {
    var info = string.split(' ');
    var info2 = info[1].split(':');
    return info2[0] + " hs";
}

function convertDateFormat(string) {
    var info = string.split(' ');
    return info[0];
}