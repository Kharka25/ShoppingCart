import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Payment from './pages/Payment';

const App = () => {
  return (
    <>
       <Navbar /> 
       <Router>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/payment' element={<Payment />}  />
         </Routes>
       </Router>
    </>
  )
}

export default App