import React, { useState, useEffect } from 'react';

function Temp() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (latitude && longitude) {
    return (
      <div>
        Latitude: {latitude}<br />
        Longitude: {longitude}
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Temp;
