import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LogoWrapper from './LogoWrapper.jsx'
import Info from './Info.jsx'
import Footer from './Footer.jsx'

export default class MainComponent extends Component {
  render () {
    return (
      <section className='container'>
        { this.props.children }
      </section>
    )
  }
}

ReactDOM.render(
  <MainComponent>
    <LogoWrapper />
    <Info />
    <Footer />
  </MainComponent>, document.querySelector('body'))
