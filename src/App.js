import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work, Blogs, AnimatePage } from './container';
import { Navbar } from './components';
import './App.scss'
const App = () => (
    <div className="app">
      <Navbar />
      <Header />
      {/* <AnimatePage/> */}
      <About />
      <Work />
      <Skills />
      <Blogs/>
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );

export default App;