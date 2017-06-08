import React from 'react';


function ParkComponent(props) {
  const park = props.park;
  return (
    <div className={`park park-bg-${park.short_name}`}>
      <h2>{park.name}</h2>
      <span>{park.city}, {park.country}</span>
    </div>
  );
}

export default ParkComponent;
