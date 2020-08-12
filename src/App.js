import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import ImageSlider from './components/ImageSlider/ImageSlider'
import Human from './components/humanType/Human'
import Closes from './components/closesType/Closes'
import Footer from './components/Footer/Footer'
 class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImageSlider/>
        <Human/>
        <Closes/>
        <Footer/>
      </div>
    )
  }
}

export default App