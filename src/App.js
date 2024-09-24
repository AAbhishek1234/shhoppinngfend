import React from 'react';

import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';

import Log from './pages/Log';
import OnSale from './components/OnSale';
import Brands from './components/Brands';

import Signup from './pages/Signup'
//import Profile from './Pages/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Productdetails from './pages/Productdetails'
import Loader from './components/Loader';
import Casual from './components/Casual';
import Formal from './components/Formal';
import Party from './components/Party';
import Gym from './components/Gym';
import Arrival from './components/Arrival';
import ProtectedRoute from './components/ProtectedRoute';
import Order from './pages/Order';
function App()
 {
  return(
    <>
   
    <ToastContainer/>
    <Loader/>
        <Router> 
          {/* <Nav></Nav>   */}
          <Routes> 
        {/* <Route path="/" element={<Nav/>}/>  */}
             <Route path='/' element={<Home/>}> </Route>
             <Route path="/Shop" element={<Shop />}/>
             <Route path='/Cart' element={<Cart/>}/> 
             <Route path="/Log" element={<ProtectedRoute element={<Log />} />} />
             <Route path='/OnSale'element={<OnSale/>}/>
             <Route path='/NewArrival' element={<Arrival/>}/>
             <Route path='/Brands' element={<Brands/>}/>
             <Route path="/Signup" element={<ProtectedRoute element={<Signup />} />} />
             <Route path='/Productdetails/:productId' element={<Productdetails/>}/>
             <Route path='/Casual' element={<Casual/>}/>
             <Route path='/Formal' element={<Formal/>}/>
            <Route path='/Party' element={<Party/>}/>
            <Route path='/Gym' element={<Gym/>}/>
            <Route path='/Order' element={<Order/>}/>

          </Routes>
        </Router>
        
    </>
  )
}
export default App
