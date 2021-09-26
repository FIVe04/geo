window.addEventListener('load', ()=> {
    const latText = document.getElementById('h1');
    const longText = document.getElementById('h2');
    const accuracyText = document.getElementById('h3');
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
    function success(pos) {
        var crd = pos.coords;
      
        console.log('Ваше текущее местоположение:');
        console.log(`Широта: ${crd.latitude}`);
        console.log(`Долгота: ${crd.longitude}`);
        console.log(`Плюс-минус ${crd.accuracy} метров.`);
        latText.innerText = crd.latitude;
        longText.innerText =crd.longitude;
        accuracyText.innerText = crd.accuracy;
    };
      
    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        latText.innerText = `ERROR(${err.code}): ${err.message}`;
    };
      
    navigator.geolocation.getCurrentPosition(success, error, options);


    
});
