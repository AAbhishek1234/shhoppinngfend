import { useState } from 'react'
import React from 'react'
import Nav from '../components/Nav'
import './cart.css'
import Stayuptodate from '../components/Stayuptodate';
import Footer from '../components/Footer';
import ActualFooter from '../components/ActualFooter';
function Cart() {
  const [count, setCount] = useState(0);
  const [countone, setCountone] = useState(0);
  const [counttwo, setCounttwo] = useState(0);
  return (
    <>
    <Nav/>
    <h1 id='yourcart'>YOUR CART</h1>
    <div id='outerdiv'>
     <img  id='img35'src='./Images/Frame 35.png'/>
     <img  id='img33'src='./Images/Frame 33.png'/>
     <img  id='img34'src='./Images/Frame 34.png'/>
     <div id='line'></div>
     <div id='line1'></div>
     <h2 id='chs'>Check Shirt</h2>
     <h2 id='chs1'>Green Shirt</h2>
     <h2 id='chs2'>Jeans</h2>
     <p id='size'>Size:Large</p>
     <p id='color'>Color:Red</p>
     <p id='dollar'>$95</p>
     <p id='size1'>Size:Medium</p>
     <p id='color1'>Color:Green</p>
     <p id='dollar1'>$105</p>
     <p id='size2'>Size:Large</p>
     <p id='color2'>Color:Mixed</p>
     <p id='dollar2'>$225</p>
     <img id='del'src='./Images/delete.png'/>
     <img id='del1'src='./Images/delete.png'/>
     <img id='del2'src='./Images/delete.png'/>
     <div id="calculation2">
          <button id="buttong1" onClick={() => setCount(count - 1)}>
            -
          </button>
          <span id="span1">{count}</span>
          <button id="buttongg1" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <div id="calculation3">
          <button id="buttong1" onClick={() => setCountone(countone - 1)}>
            -
          </button>
          <span id="span1">{countone}</span>
          <button id="buttongg1" onClick={() => setCountone(countone + 1)}>
            +
          </button>
        </div>
        <div id="calculation4">
          <button id="buttong1" onClick={() => setCounttwo(counttwo - 1)}>
            -
          </button>
          <span id="span1">{counttwo}</span>
          <button id="buttongg1" onClick={() => setCounttwo(counttwo + 1)}>
            +
          </button>
        </div>
    </div>


<div id="summarydiv">
<h2 id='orders'>Order Summary</h2>
<p id='subtotal'>Subtotal</p>
<p id='rupee'>$565</p>
<p id='dis'>Discount(-20%)</p>
<p id='rupee1'>$113</p>
<p id='dely'>Delivery Fees</p>
<p id='rupee2'>$15</p>
<div id='underline'></div>
<p id='total'>Total</p>
<p id='rupee3'>$333</p>
<input id='memo' type='text'placeholder='                Add promo code'></input>
<button id='app'>Apply</button>
<button id='go1'>Go to Checkout</button>
</div>
<Stayuptodate></Stayuptodate>
<ActualFooter></ActualFooter>
{/* <Footer></Footer> */}


    
        
    </>
  )
}

export default Cart