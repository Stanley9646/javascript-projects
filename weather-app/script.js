const apikey = "3265874a2c77ae4bb96236a642d2f";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const url = (location) => '"https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}';

async function getWeatherByLocation(location) {
    const resp = await fetch(url(location), {
        origin: "cors"
    });
    const respData = await resp.json();

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add('weather');


    weather.innerHTML = "";




    main.appendChild(weather);

    function KtoC(k) {
        return (k - 273.15).toFixed(2);
    }
    FormData.addeventlistener("submit", (e) => {
        e.preventDefault();

        const location = search.value;
        if (location) {
            getWeatherByLocation("London")
        }
    })
};