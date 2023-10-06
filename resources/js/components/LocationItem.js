import '../../css/app.css';

const LocationItem = (props) => {
    return (
      <li>
        <div className="card location-item">
            <h1>{props.address}</h1>
            <h3>{props.latitude}</h3>
            <h3>{props.longitude}</h3>
        </div>
      </li>
    );
  }
  
  export default LocationItem;