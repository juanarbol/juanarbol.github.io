import React, { Component } from 'react'

export default class Info extends Component {
  constructor () {
    super()

    this.state = {
      displayText: false
    }
  }

  _toggleInfo () {
    this.setState({
      displayText: !this.state.displayText
    })
  }

  render () {
    const whoamiElement = (
      <p className='whoami'>
        Music, maths, physics, philosophy and programing enthusiast with focus on web development.
      </p>
    )

    const element = this.state.displayText ? whoamiElement : null

    return (
      <div className='info'>
        <a id='whoami-toggle' onClick={() => this._toggleInfo()}>Who am I?</a>
        { element }
        <a href='cv.pdf' target='_blank'>CV</a>
        <a href='https://github.com/juanarbol' target='_blank'>GitHub</a>
        <a href='https://www.linkedin.com/in/juanarbol' target='_blank'>LinkedIn</a>
      </div>
    )
  }
}
