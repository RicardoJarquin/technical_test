import LocationItem from './LocationItem';

const LocationsList = (props) => {
    if (props.locations.length === 0) {
        return <h2 className="location-list__fallback">No locations found.</h2>;
    }

    return (
    <div className='card'>
        {props.locations.map((expense) => (
        <LocationItem
            key={expense.id}
            latitude={expense.latitude}
            longitude={expense.longitude}
            address={expense.address}
        />
        ))}
    </div>
    );
}

export default LocationsList;