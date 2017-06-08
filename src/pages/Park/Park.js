import React, { Component } from 'react';
import { Link } from 'react-router';

import AttractionComponent from '../../components/AttractionComponent';
import Loading from '../../components/Loading';

import './park.css';
import './park-mq768.css';
import './park-mq1024.css';

class Park extends Component {
  state = { waitData: {}, attractions: [], region: '' }

  componentDidMount() {
    fetch(`/parks/${this.props.params.id}/wait`)
      .then(res => res.json())
      .then(waitData => this.setState({ waitData: waitData, attractions: waitData.entries, region: waitData.region }))
      .catch(error => this.props.router.push('/NotFound'));
  }

  render() {
    const params = this.props.params;
    return (
      <section>
        <header className={`landing-park landing-${params.id}`}>
          <div className='park-meta'>
            <h2>{this.state.waitData.name}</h2>
            <span>{this.state.waitData.city}, {this.state.waitData.country}</span>
          </div>
          <a href='google.com' className='tix-link'>Buy Tix</a>
        </header>
        <h4>Attractions</h4>
        <div className='attractions-container'>
          {this.state.attractions.length !== 0 ? null: <Loading /> }
          {this.state.attractions.map(attraction =>
            <Link to={`/attraction/${attraction.id}/region/${this.state.region}`}
                  key={attraction.id}
                  className='attraction-item'>
              <AttractionComponent attraction={attraction} />
            </Link>
          )}
        </div>
      </section>
    );
  }
}

export default Park;
