import React, { Component } from 'react';

import Loading from '../../components/Loading';

import './attraction.css';

class Attraction extends Component {
  state = { attractionData: {}, description: '', imageUrl: '' }

  componentDidMount() {
    fetch(`/ride/${this.props.params.id}/region/${this.props.params.region}`)
      .then(res => res.json())
      .then(attractionData => this.setState({
        attractionData: attractionData,
        description: attractionData.descriptions.shortDescriptionMobile.text,
        imageUrl: attractionData.media.finderDetailMobileHero.url
      }))
      .catch(error => this.props.router.push('/NotFound'));
  }

  render() {
    let attractionData = this.state.attractionData;
    let description = this.state.description;
    let imgUrl = this.state.imageUrl;
    let headerStyle = {
      backgroundImage: 'url(' + imgUrl + ')'
    };

    return (
      <section>
        <header style = {headerStyle} className='attraction-header'>
          <h2>{attractionData.name}</h2>
        </header>
        {description.length === 0 ? <Loading /> : null}
        {description.indexOf('</') !== -1 ?
         (
           <div dangerouslySetInnerHTML={{__html: description.replace(/(<? *script)/gi, 'illegalscript') }} ></div>
         )
          : description}
      </section>
    );
  }
}

export default Attraction;
