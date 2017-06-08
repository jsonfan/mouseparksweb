import React from 'react';

import ParksSection from '../../components/ParksSection';

function Landing(props) {

  return (
    <div className="landing-page">
      <header className="landing">
        <div>
          <h1>MouseParks</h1>
          <h5>Your source for the best Disney experience!</h5>
        </div>
      </header>
      <ParksSection  />
    </div>
  );
}

export default Landing;
