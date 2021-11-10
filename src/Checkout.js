import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Checkoutitem from './Checkoutitem'
import './Checkout.css';
import { useHistory } from "react-router-dom";
import { cartOrd } from './actions/cartAction';

function Checkout() {

    const cart = useSelector(state => state.cartReducer.items);
    const history = useHistory();
    const dispatch = useDispatch();

    const cost = cart.map(item => item.cost)
    const curcost = cost.reduce((prev,cur) => prev+cur,0) 

    const butPushup = () => { 
        dispatch(cartOrd(cart));
        history.push("/myorders");
        alert("Thank You! your order is confirmed");
        window.scrollTo(0,-1000); 
    } 

    return ( 
        <div className='checkout'>
            {cart.length !== 0 ? (
                <div className='co-cart'>
                   <div className='sec-devider'> 
                        <div className='cart-head'>
                           <h2>Your Cart</h2>
                        </div>
                        <div className='payment'>
                            <p>Subtotal ({cart.length} items) : {curcost}$ </p>
                            <button onClick={() => butPushup()} >Proceed to Checkout</button>
                        </div>
                   </div> 
                    <div className='ço-cart-body'>
                         {cart.map(item => (
                            <Checkoutitem
                            id={item.id}
                            title={item.title}
                            cost={item.cost}
                            rating={item.rating}
                            img={item.img} />
                         )) }
                    </div>
                </div>
            ) : (
            <div className='cono-cart'>
              {/* <h1>Your Cart is empty !</h1> */}
              <img className='ço-ca-img' src='https://i.pinimg.com/originals/2e/ac/fa/2eacfa305d7715bdcd86bb4956209038.png' />
            </div>
                )}
        </div>
    )
}

export default Checkout