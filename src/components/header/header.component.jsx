import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import Img from '../../assets/logo.png'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';


import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
      {/* <img className='logo' src={Img} alt=""/> */}
    </Link>
    
    <div className='options'>
      
    <Link className='option' to='/search'>
        MENU
      </Link>
      <Link className='option' to='/shop'>
        ABOUT
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      { 
        currentUser ?( 
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> ) 
            : ( <Link className='option' to ='/signin'> SIGN IN </Link>) 
          }
    </div> 
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);