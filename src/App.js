import React from 'react';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Nav from './components/Nav';
import Log from './Pages/Log';
import OnSale from './components/OnSale';
import Brands from './components/Brands';
import NewArrival from './components/NewArrival';
import NewArrivals from './components/NewArrivals'
import Signup from './Pages/Signup';
//import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productdetails from './Pages/Productdetails';
import Loader from './components/Loader';

function App()
 {
  return(
    <>
   
    <ToastContainer/>
    <Loader/>
        <Router>   
          <Routes> 
        {/* <Route path="/" element={<Nav/>}/>  */}
             <Route path='/' element={<Home/>}> </Route>
             <Route path="/Shop" element={<Shop />}/>
             <Route path='/Cart' element={<Cart/>}/> 
             <Route path='/Log' element={<Log/>}/>
             <Route path='/OnSale'element={<OnSale/>}/>
             <Route path='/NewArrivals'element={<NewArrivals/>}/>
             <Route path='/Brands' element={<Brands/>}/>
             <Route path='/Signup' element={<Signup/>}/>
             <Route path='/Productdetails/:productId' element={<Productdetails/>}/>
          
          </Routes>
        </Router>
        
    </>
  )
}
export default App
