import React from 'react';

import './AttractionComponent.css';

function AttractionComponent(props) {
  const attraction = props.attraction;
  console.log(attraction.name, attraction.waitTime, attraction.waitTime.postedWaitMinutes);
  return (
    <div className="attraction">
      <h3 className="attraction-name">{attraction.name}</h3>
      <span className="status">Status: {attraction.waitTime.status}</span>
      <span className="attraction-wait">{ (attraction.waitTime.status !== 'Operating') ||
        (attraction.waitTime.postedWaitMinutes === undefined) ?
        null :
        attraction.waitTime.postedWaitMinutes + ' Minute wait'}</span>
      <span className="attraction-fp">{attraction.waitTime.fastPass.available && (attraction.waitTime.status === 'Operating') && attraction.waitTime.fastPass.endTime !== undefined ?
        'FastPass Return: ' + attraction.waitTime.fastPass.startTime + '-' + attraction.waitTime.fastPass.endTime
          : null}
      </span>
      <span className="attraction-sr">{attraction.waitTime.singleRider ? 'Single Rider Available' : null }</span>
    </div>
  );
}

export default AttractionComponent;
