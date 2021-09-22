window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.getElementById('h1');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;
            console.log(lat, long);
            const text = document.getElementById('h1');
            const text2 = document.getElementById('h2');
            text.innerText = lat;
            text2.innerText = long;
        });
    }
});
