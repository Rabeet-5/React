import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './components/layout/header/Header';
import WebFont from 'webfontloader'
import React from 'react';
import Footer from './components/layout/footer/Footer';
import Home from './components/Home/Home';


function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      }
    })
  }, [])

  return <>
    <Router >
        <Header />
      
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>

        <Footer />
    </Router>
  </>

};

export default App;
