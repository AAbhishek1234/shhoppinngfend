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
import Profile from './pages/Profile';
import Filter from './components/Filter'
import Fake from './components/Fake';
import Textbox from './components/Textbox';
import Child from './components/Child'
import Parent from './components/Parent';
function App()
 {
  return(
    <>
   
    <ToastContainer/>
    <Loader/>
        <Router> 
          <Routes> 
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
           <Route path='/Profile' element={<Profile/>}/>
<Route path='/Filter' element={<Filter/>}/>
<Route path='/Fake' element={<Fake/>}/>
<Route path='/Parent' element={<Parent/>}/>
          </Routes>
        </Router>
        
    </>
  )
}
export default App
