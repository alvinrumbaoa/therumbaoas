import React from 'react';
import Homepage from "./views/Homepage";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Blog from "./components/Blog";
import ContactUsRegistered from "./views/ContactUsRegistered";
import ImageViewer from "./views/ImageViewer";
import Portfolio from "./components/Portfolio";
import { Router } from '@reach/router';
import {motion } from 'framer-motion';
import Events from './views/Events';
import Wedding from './views/Wedding';
import Newborn from './views/Newborn';
import Modeling from './views/Modeling';
import Food from './views/Food';
import ViewOneBlog from './views/ViewOneBlog';
import {animationOne, transition} from "./animations/Animation";
import Admin from './components/Admin'
import './App.css';
import {Helmet} from 'react-helmet';
function App() {
  return (
    
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Maica Rumbaoa || Photographer</title>
                <link rel="canonical" href="http://therumbaoas.com" />
      </Helmet>
      <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
        <Router>
            <Homepage default/>
            <Homepage path="/home"/>
            <ContactUs path="/contactus"/>
            <Portfolio path="/portfolio"/>
            <About path="/about"/>
            <Blog path="/blog"/>
            <ImageViewer path="/images/:id"/>
            <ContactUsRegistered path="/submitted"/>
            <Events path="/portfolio/events"/>
            <Wedding path="/portfolio/wedding"/>
            <Newborn path="/portfolio/newborn"/>
            <Modeling path="/portfolio/modeling"/>
            <Food path="/portfolio/food"/>
            <ViewOneBlog path="/blogs/:id"/>
            <Admin path="/admin"/>
        </Router>
      </motion.div>
    </div>

  );
}

export default App;
