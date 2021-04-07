import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { useSelector } from 'react-redux';
import { initialState } from './reducers/reducer';
 
function Header() {

  const cart = useSelector(state => state.items)


  return (
    <div className='header'>
      <Link className='header-logo-link' to='/'>
         <span className='mgr'>GowthaM's</span>
         <span className='mgr-icon'> <HeadsetMicIcon /></span>
      </Link>
      <div className='header-searchbar'>
        <input className='h-sb-inp' placeholder='search' />
        <SearchIcon className='h-sb-icon' />
      </div>
      <div className='header-navs'>
          <Link className='header-navs-link one' to='login'>
              <span className='h-n-l-onespan'>Hello Customer</span>
              <span className='h-n-l-twospan'>Sign in</span>
          </Link>
          <Link className='header-navs-link two' to='/'>
              <span className='h-n-l-onespan'>Returns</span>
              <span className='h-n-l-twospan'>& orders</span>
          </Link> 
          <Link className='header-navs-link two' to='/'>
            <NotificationsIcon className='notif' /> 
          </Link>  
          <Link className='header-navs-link-last cart' to='checkout'>
              <span className='h-n-l-onespan h-n-l-onespan-white'>CART</span> 
              <ShoppingCartIcon className='h-n-l-l-icon' />
              <span className='h-n-l-last-span'>{cart.length}</span>
          </Link>
          <Link className='header-navs-link contact two' to='/'>
              <span className='h-n-l-onespan h-n-l-onespan-white '>CONTACT</span>
              <span className='notif'><SupervisorAccountIcon/></span>
          </Link> 
      </div>
    </div>
  )
}

export default Header;