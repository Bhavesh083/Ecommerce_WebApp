import React,{useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';   
import { useHistory } from 'react-router';
import { cartOrd } from './actions/cartAction';
import { logAdd, loginAdd } from './actions/loginAction';
import './Login.css'; 
import { createChainedFunction } from '@material-ui/core';
 
function Login() { 
 
  const [peye, setPeye] = useState(false);
  const [cpeye, setCpeye] = useState(false); 
  const [used, setUsed] = useState(false);

  const userDet = useSelector(state => state.loginReducer.user); 
  const si = useSelector(state => state.loginReducer.notlogin);   

  const dispatch = useDispatch();            
  const history = useHistory();            

  const {register,handleSubmit,watch, formState:{errors}} = useForm({reValidateMode:'onChange'});
  
  const cp = watch("password",'');             

  const changePeye = () =>{
    setPeye(!peye);
  }
  const changeCpeye = () =>{    
    setCpeye(!cpeye);
  }  
  
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/ac/auth',data).then(res => { 
      console.log(res.data);
      if(res.data)
      {
        setUsed(false);
        dispatch(logAdd(data.email,data.password)); 
        dispatch(loginAdd(true));//true means logged in
      }
      else
      {
        setUsed(true);
      }
    }).catch(err => console.log("error "+err));
  } 
  const butPushup = () => { 
    history.push("/myorders");
    window.scrollTo(0,-1000); 
  } 
  const createAcc = () => { 
    history.push("/signup");
    window.scrollTo(0,-1000); 
  }
  const changeLogin = () =>{
    dispatch(loginAdd(false));
    window.scrollTo(0,-1000); 
  } 

  return (
    <div className='sect-main-div'> 
      <div className='leftrrow'>
         <img className='leftrrowimg' src='https://img.freepik.com/free-psd/teal-color-headphone-brand-product-social-media-post-banner_154386-100.jpg?size=626&ext=jpg&ga=GA1.2.1719178491.1616889600' />
      </div>
      <div className='bgg-form'>   
       {(!si)?<form className='formfff' onSubmit={handleSubmit(onSubmit)} >
          
              <label>Your Email Address</label>
              <input   placeholder='Enter Email Address' type='email'  {...register('email',{required:true})}   />
              {errors.email && <p className='error'>
              <i className="fas fa-exclamation-circle"></i> Email is required
              </p>}

              <label>Password</label>
              <div><input  type={peye?'text':'password'}  placeholder='Enter Password'  {...register('password',{required:true,})} />
              {peye?<i onClick={changePeye} className="fas fa-eye"></i>:<i onClick={changePeye} className="fas fa-eye-slash"></i>}</div>
    
              {used?<p className='error'><i className="fas fa-exclamation-circle"></i>Email and password did not match!</p>:""}
              <button >LogIn</button>
              <button onClick={()=>createAcc()} >Create new account</button>
         </form>:
         <div className='logout-box'>
           <button onClick={()=>butPushup()}>
             Your Orders
           </button>
           <button onClick={changeLogin}>
             Log Out
           </button>
         </div>   
         }
         </div>
    </div>
  )
}

export default Login;