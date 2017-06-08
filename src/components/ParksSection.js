import React, { Component } from 'react';
import { Link } from 'react-router';

import ParkComponent from './ParkComponent';
import Loading from './Loading';

import './ParksSection.css';
import './ParksSection-mq768.css';
import './ParksSection-mq1024.css';

class ParksSection extends Component {
  state = { parks: []}

  componentDidMount() {
    fetch('/parks')
      .then(res => res.json())
      .then(parks => this.setState({ parks }));
  }

  render() {
    return (
      <section className="parks">
        <h4>Parks</h4>
        <div className="parks-container">
          {this.state.parks.length !== 0 ? null: <Loading /> }
          {this.state.parks.map(park =>
            <Link to={`/park/${park.short_name}`} key={park.short_name} className='park-item'>
              <ParkComponent park={park} />
            </Link>
          )}
        </div>
      </section>
    );
  }
}

export default ParksSection;
