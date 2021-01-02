
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Footer from './components/Footer';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        <Footer />
      </section>
    </div>
  )
}

export default App;
