import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useSelector } from 'react-redux';
import { initialState } from './reducers/reducer';
 
function Header() {

  const cart = useSelector(state => state.items);
  const [open, setOpen] = useState(false);

  const openMenu = () =>{
    setOpen(!open); 
  }

  return (
    <div className='header'>
    <div className='lcheader'>  
      <Link className='header-logo-link' to='/'>
         <span className='mgr'>GowthaM's</span>
         <span className='mgr-icon'> <HeadsetMicIcon /></span>
      </Link>
      <div className='header-searchbar-sb'>
        <input className='h-sb-inp' placeholder='search' />
        <SearchIcon className='h-sb-icon' />
      </div>
      <div className='header-navs'> 
          <Link className='header-navs-link one disphide' to='login'>
              <span className='h-n-l-onespan'>Hello Customer</span>
              <span className='h-n-l-twospan'>Sign in</span>
          </Link>
          <Link className='header-navs-link two disphide' to='/'>
            <NotificationsIcon className='notif' /> 
          </Link>  
          <Link className='header-navs-link contact two disphide' to='/'>
              <span className='h-n-l-onespan h-n-l-onespan-white '>CONTACT</span>
              <span className='notif'><SupervisorAccountIcon/></span>
          </Link>
          <Link className='header-navs-link-last cart ' to='checkout'>
              <span className='h-n-l-onespan h-n-l-onespan-white disphide'>CART</span> 
              <ShoppingCartIcon className='h-n-l-l-icon' /> 
              <span className='h-n-l-last-span '>{cart.length}</span>                  
          </Link>
          <div onClick={()=>openMenu()} className='menuicn'>
             <MenuRoundedIcon  className='menuicn-icn' />
          </div> 
      </div>
      </div>
      <div className={open? 'openedmenu rcheader': 'closedmenu rcheader'}>
          <Link className='rch-link' to='login'>
              <span className='h-n-l-twospan'>Sign in</span>
          </Link>
          <Link className='rch-link' to='/'>
            <NotificationsIcon className='' /> 
          </Link>  
          <Link className='rch-link' to='/'>
              <span className=''>Contact</span>
              <span className=''><SupervisorAccountIcon/></span>
          </Link>
      </div>
    </div> 
  )
}

export default Header;