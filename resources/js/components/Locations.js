import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LocationsList from './LocationsList';

const Locations = () => {

    const [locations, setLocations] = useState([]);

    async function getDatabaseLocations(){
        let response = await fetch('api/locations');
        if(response.ok){
            let databaseLocations = await response.json();
            setLocations((prevLocations) => {
                return [...databaseLocations, ...prevLocations];
            });
        }
    }

    async function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let geolocationURL = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;

        const responseLocation = await fetch(geolocationURL);
        const geolocation = await responseLocation.json();

        let locationData = {
            address: geolocation.display_name,
            latitude: geolocation.lat,
            longitude: geolocation.lon
        };

        const responseStore = await fetch('api/locations',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(locationData)
        })

        const idLocation = await responseStore.json();

        locationData.id = idLocation;

        if(responseStore.ok){
            setLocations((prevLocations) => {
                return [locationData, ...prevLocations];
            });
        }
    }

    function error() {
        status.textContent = "Unable to retrieve your location";
    }

    function locate(){
        navigator.geolocation.getCurrentPosition( success, error )
    }

    useEffect(() => {
        getDatabaseLocations();
    }, []);

    return (
        <div>
            <button onClick={locate}>LOCATION NOW</button>
            <LocationsList locations={locations} />
        </div>
    );
}

export default Locations;

if (document.getElementById('example')) {
    ReactDOM.render(<Locations />, document.getElementById('example'));
}
