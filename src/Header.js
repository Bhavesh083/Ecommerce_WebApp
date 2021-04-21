import React,{useState} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search' 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import LabelImportantRoundedIcon from '@material-ui/icons/LabelImportantRounded';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useSelector } from 'react-redux';
import { initialState } from './reducers/cartReducer';
 
function Header() {

  const cart = useSelector(state => state.cartReducer.items);
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
          <Link className='header-navs-link contact two disphide' to='/'>
              <span className='h-n-l-twospan'>Home</span>
              <span className='notif notif-home'><HomeRoundedIcon/></span>
          </Link> 
          <Link className='header-navs-link contact two disphide' to='login'>
              <span className='h-n-l-twospan'>SignIn</span>
              <span className='notif notif-down' ><LabelImportantRoundedIcon/></span>
          </Link>    
          <Link className='header-navs-link contact two disphide' to='/contact'>
              <span className='h-n-l-twospan'>Contact</span>
              <span className='notif notif-cont'><SupervisorAccountIcon/></span>
          </Link>
          <Link className='header-navs-link-last cart ' to='checkout'>
              <span className='h-n-l-cartspan disphide'>Cart</span> 
              <ShoppingCartIcon className='h-n-l-l-icon' /> 
              <span className='h-n-l-last-span '>{cart.length}</span>                  
          </Link>
          <div onClick={()=>openMenu()} className={open?'menuicn menuicnc':'menuicn'}>
             <MenuRoundedIcon  className='menuicn-icn' />
          </div> 
      </div>
      </div>
      <div className={open? 'openedmenu rcheader': 'closedmenu rcheader'}>
          <Link className='rch-link' to='/'>
              <span className='h-n-l-twospan'>Home</span>
              <span className='notif notif-home'><HomeRoundedIcon/></span>
          </Link> 
          <Link className='rch-link' to='login'>
              <span className='h-n-l-twospan'>SignIn</span>
              <span className='notif-down notif' ><LabelImportantRoundedIcon/></span>
          </Link> 
          <Link className='rch-link' to='contact'>
              <span className='h-n-l-twospan'>Contact</span>
              <span className='notif notif-cont'><SupervisorAccountIcon/></span>
          </Link>
      </div>
    </div> 
  )
}

export default Header;