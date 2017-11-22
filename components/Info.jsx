import React, { Component } from 'react'

export default class Info extends Component {
  render () {
    return (
      <div className='info'>
        <a id='whoami-toggle'>Who am I?</a>
        <p className='whoami'>
          Music, maths, physics, philosophy and programing enthusiast with focus on web development.
        </p>
        <a href='cv.pdf' target='_blank'>CV</a>
        <a href='https://github.com/juanarbol'>GitHub</a>
        <a href='https://www.linkedin.com/in/juanarbol'>LinkedIn</a>
      </div>
    )
  }
}
