import React, { Component } from 'react';


class ServiceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    }
  }

  onClickServiceCard = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
  
  render() {
    return (     
      <li className='flex items-center bg-light-green dib pa3 ma2 grow shadow-5 ba b--orange pointer relative' onClick={this.onClickServiceCard}>
        <img src={`https://robohash.org/${this.props.index}`} alt='robot' style={{ height: '100px', width: '100px', order: '2' }} />
        <div className='tl'>
          <h4><label className='orange'>Name: </label>{this.props.people.name}</h4>
          <p><label className='orange'>Gender: </label>{this.props.people.gender}</p>
          <p><label className='orange'>Height: </label>{this.props.people.height}</p>
          <p><label className='orange'>Hair Color: </label>{this.props.people.hair_color}</p>
        </div>
      </li>
    );
  }

}

export default ServiceCard;