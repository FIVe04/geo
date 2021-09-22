window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.getElementById('h1');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const long = position.coords.longitude;
            const lat = position.coords.latitude;
            console.log(lat, long);
            
        });
    }
});
