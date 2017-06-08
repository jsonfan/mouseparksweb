import React from 'react';

import './AttractionComponent.css';

function AttractionComponent(props) {
  const attraction = props.attraction;
  console.log(attraction.name, attraction.waitTime, attraction.waitTime.postedWaitMinutes);
  return (
    <div className="attraction">
      <h3>{attraction.name}</h3>
      <p>Status: {attraction.waitTime.status}</p>
      <p>{ (attraction.waitTime.status !== 'Operating') || (attraction.waitTime.postedWaitMinutes === undefined) ? null : 'Wait Time(mins): ' + attraction.waitTime.postedWaitMinutes}</p>
      <p>{attraction.waitTime.fastPass.available && (attraction.waitTime.status === 'Operating') && attraction.waitTime.fastPass.endTime !== undefined ?
        'FastPass Return: ' + attraction.waitTime.fastPass.startTime + '-' + attraction.waitTime.fastPass.endTime
          : null}
      </p>
      <p>{attraction.waitTime.singleRider ? 'Single Rider Available' : null }</p>
    </div>
  );
}

export default AttractionComponent;
