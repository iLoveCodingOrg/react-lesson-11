import React from 'react'
import Child from './Child'

export default class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      info: 'Aziz',
      anotherInfo: [1,1]
    }

    this.updateText = this.updateText.bind(this)
  }

  updateText(){
    // this.state.info = 'Aziz Ali'
    this.setState({
      info: 'Aziz Ali'
    }, ()=>{
      // TASK AFTER THE STATE IS UPDATED
      console.log('inside Cb', this.state.info)
    })

    console.log(this.state.info)

  }

  render() {
    return (
      <div>
        <Child
          updateText={this.updateText}
          text={this.state.info} />
      </div>
    )
  }
}