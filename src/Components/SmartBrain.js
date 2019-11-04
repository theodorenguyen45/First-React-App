import React, { Component } from 'react'
import Rank from './Rank'
import FaceRecognition from './FaceRecognition'

export default class SmartBrain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      imageUrl: '',
      box: []
    }
  }

  calculateFaceLocation = dataRegions => {
    const dataReturn = dataRegions.map(data => {
      const calrifaiFace = data.region_info.bounding_box

      const image = document.getElementById('inputimage')
      const width = Number(image.width)
      const height = Number(image.height)

      return {
        leftCol: calrifaiFace.left_col * width,
        topRow: calrifaiFace.top_row * height,
        rightCol: width - calrifaiFace.right_col * width,
        bottomRow: height - calrifaiFace.bottom_row * height
      }
    })

    return dataReturn
  }

  displayFaceBox = box => {
    this.setState({ box })
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    fetch('https://guarded-spire-67673.herokuapp.com/imageurl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          this.displayFaceBox(
            this.calculateFaceLocation(
              response.outputs[0].data.regions
            )
          )
          // console.log(response.outputs[0].data.regions)
          fetch(
            'https://guarded-spire-67673.herokuapp.com/image',
            {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: this.props.user.id
              })
            }
          )
            .then(res => res.json())
            .then(count => {
              this.props.updateEntry(count)
            })
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='flex flex-wrap flex-column items-center justify-around'>
        <div id='SmartBrain' className='tc mv5 w-80-l'>
          <h1 className='ttu'>Smart Brain</h1>
          <h3 className='i fw1'>This is a face recognition</h3>
          <Rank
            name={this.props.user.name}
            entries={this.props.user.entries}
          />
          <div className='custom-grid'>
            <input
              className='customInput f4 pa3 ba b--green bg-lightest-blue'
              onChange={this.onInputChange}
              type='text'
              placeholder='Image url goes here...'
            />
            <button
              className='grow f4 link ph3 pv2 dib white bg-light-purple mt3 ma0-l ml2-l'
              onClick={this.onButtonSubmit}
            >
              Detect
            </button>
          </div>
        </div>

        <FaceRecognition
          imageUrl={this.state.imageUrl}
          boxes={this.state.box}
        />
      </div>
    )
  }
}
