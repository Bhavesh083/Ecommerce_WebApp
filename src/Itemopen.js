import React from 'react'
import './Itemopen.css'
import { useDispatch, useSelector } from 'react-redux';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router';
import { Star } from '@material-ui/icons';
import { cartAdd } from './actions/cartAction';

function Itemopen() {

    const history = useHistory();
    const dispatch = useDispatch();
    const oi = useSelector(state => state.openItemReducer.item);

    const backGo = () => {
        history.push("/");
        window.scrollTo(0,-1000); 
    }
    const addCartto = () =>{
        dispatch(cartAdd(oi.id,oi.title,oi.rating,oi.cost,oi.img)); 
    }


    return (
        <div className='totalopenitembox'>
            <div className='leftbackbutbox1' onClick={()=>backGo()}>
                <button className='butkbsicon'><KeyboardBackspaceIcon className='kbsicon'/>Go Back</button>
            </div>
            <div className='leftopenitembdy'> 
                <img src={oi.img} />
            </div>
            <div className='rightopenitembdy'>
                <p className='roib-title'>{oi.title}</p>
                <p className='last-roib-title'>{ Array(oi.rating)  
                       .fill()
                       .map((_) =>(
                                 <p><Star className='p-star-p-p' /></p>))
                    }</p>  
                <div className='fnl-lst-dwn-bx'>    
                <span>{oi.cost}$</span> 
                <button onClick={()=>addCartto()}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Itemopen;
