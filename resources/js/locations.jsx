import { createRoot } from "react-dom/client";

export default function app(){
    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        geolocationURL = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

        const response = await fetch(geolocationURL);
        const geolocation = await response.json();
        console.log(geolocation);
        console.log(geolocation.lat);
        console.log(geolocation.lon);

    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }

    function locate(){
        navigator.geolocation.getCurrentPosition( success, error )
    }

    return (
        <div>
            <button onClick={locate}>LOCATION NOW</button>
        </div>
    );

    if(document.getElementById('app')){
        createRoot(document.getElementById('app'))
    }
}