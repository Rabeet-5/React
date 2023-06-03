import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Services';
import SMNavbar from './Components/Navbar';
import Footer from './Pages/Footer';

function App() {

  return <>

    <SMNavbar />


    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Service />} />

    </Routes>

    <div className='container-fluid '>
      <div className='row'>
        <div className='col-lg-12  col-sm-12'>
          <Service />

        </div>
      </div>
    </div>
    

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12 col-12'>
        <About />
        </div>
      </div>
    </div>

    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-12 col-12'>

          <Footer />
        </div>
      </div>
    </div>  

  </>


}

export default App;
