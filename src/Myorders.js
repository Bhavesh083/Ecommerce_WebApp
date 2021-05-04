import { Star } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import Checkoutitem from './Checkoutitem';
import "./Myorders.css";

function Myorders() {

    const mord = useSelector(state => state.cartReducer.orders);

    const showImg = () =>{
        console.log(mord.length);
    }  

    return (
        <div className='myord'>
            <span className='yr-ord-ordpg'>Your Orders</span>  
            <div className='cbox-ordbox-ord'>
                         {mord.map(item => (
                            <div className='Checkoutitem-box '>
                            <div> 
                                 <img src={item.img} />
                            </div>
                            <div className='cout-bdy'>
                                 <p className='cout-bdy-p'>{item.title}</p>
                                 <div className='cout-bdy-rating'>
                                     { Array(item.rating) 
                                        .fill()
                                        .map((_) =>(
                                                  <p><Star className='stars-ck' /></p>))
                                     }
                                 </div>
                                 <div className='fnal-ck'>
                                     <p className='f-ck-p'>{item.cost}$</p>
                                     <p className='ord-p-last-des'>Ordered</p>
                                 </div>
                             </div>
                         </div>
                         )) }
            </div>
        </div>
    )
} 

export default Myorders;
