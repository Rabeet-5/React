import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from './components/layout/header/Header';
import WebFont from 'webfontloader'
import React from 'react';
import Footer from './components/layout/footer/Footer';
import Home from './components/Home/Home';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Search/Search';
import {  LoginSignup } from './components/users/LoginSignup';
import store from './store'
import { LoadUser } from './actions/userAction';
import UserOption from './components/layout/header/UserOption';
import { useSelector } from 'react-redux';


function App() {

  const {isAuthenticated,user} = useSelector(state=>state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      }
    });

    store.dispatch(LoadUser());

  }, [])

  return <>
    <Router >
      <Header />
      {isAuthenticated && <UserOption user={user} />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product/:id' element={<ProductDetails />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/products/:keyword' element={<Products />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/login' element={<LoginSignup />} />
      </Routes>

      <Footer />
    </Router>
  </>

};

export default App;
