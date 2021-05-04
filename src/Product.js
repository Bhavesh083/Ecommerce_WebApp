import { Button } from '@material-ui/core'
import { Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Product.css'; 
import { cartAdd } from './actions/cartAction';
import { openitemAdd } from './actions/openItemaction';
 
function Product({id,title,rating,cost,img}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const cartAdder = () =>{
        dispatch(cartAdd(id,title,rating,cost,img)); 
    } 
    const openItem = () =>{
        history.push("/openitem");
        dispatch(openitemAdd(id,title,rating,cost,img));    
        window.scrollTo(0,-1000); 
    }
 
    return (
        <div className='product' >
            <div onClick={()=>openItem()}> 
            <div className='pr-top'>
            <p className='product-title'>{title}</p>
                <div className='product-rating'>
                    { Array(rating)  
                       .fill()
                       .map((_) =>(
                                 <p><Star className='p-r-p' /></p>))
                    }
                </div>
            </div>
            <div className='pr-cen'>
                <img className='product-image' src={img} />
            </div>
            </div>
            <div className='product-down'>
                <p className='product-cost'>{cost}$</p>
                <button className='product-button' onClick={()=>cartAdder()}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product