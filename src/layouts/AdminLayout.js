import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { signOutUserStart } from './../redux/User/user.actions';

import {auth} from './../firebase/firebase.utils'

import Header from './../components/header/header.component';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/footer/Footer.component';

const AdminLayout = props => {
  // const dispatch = useDispatch();

  // const signOut = () => {
  //   dispatch(signOutUserStart());
  // };

  return (
    <div className="adminLayout">
      {/* <Header {...props} /> */}
      <div className="controlPanel">
        <div className="sidebar">
          {/* <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => auth.signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav> */}
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminLayout;
