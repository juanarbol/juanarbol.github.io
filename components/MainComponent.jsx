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

const app = (
  <MainComponent>
    <LogoWrapper />
    <Info />
    <Footer />
  </MainComponent>
)

const DOMroot = document.querySelector('#react-root')

ReactDOM.render(app, DOMroot)
