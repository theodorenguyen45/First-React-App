import React, { Component } from 'react';
import Rank from './Rank';
import Clarifai from 'clarifai'
import FaceRecognition from './FaceRecognition';


const app = new Clarifai.App({
  apiKey: '712f5d8b674244c3b2a2bb6492f4599a'
});


export default class SmartBrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateFaceLocation = data => {
    const calrifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: calrifaiFace.left_col * width,
      topRow: calrifaiFace.top_row * height,
      rightCol: width - (calrifaiFace.right_col * width),
      bottomRow: height - (calrifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = box => {
    this.setState({ box })
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:4000/image', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.props.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.props.updateEntry(count)
            })
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='flex flex-wrap flex-column items-center justify-around'>
        <div id='SmartBrain' className='tc mv5 w-80-l'>
          <h1 className='ttu'>Smart Brain</h1>
          <h3 className='i fw1'>This is a face recognition</h3>
          <Rank name={this.props.user.name} entries={this.props.user.entries} />
          <div className='custom-grid'>
            <input className='customInput f4 pa3 ba b--green bg-lightest-blue' onChange={this.onInputChange} type="text" placeholder='Image url goes here...' />
            <button className='grow f4 link ph3 pv2 dib white bg-light-purple mt3 ma0-l ml2-l' onClick={this.onButtonSubmit} >Detect</button>
          </div>
        </div>
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box} />
      </div>
    )
  }
} 
