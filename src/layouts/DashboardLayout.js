import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from './../firebase/firebase.utils'
// import { useDispatch } from 'react-redux';
// import { signOutUserStart } from './../redux/User/user.actions';

import Header from './../components/header/header.component';
import VerticalNav from './../components/VerticalNav';
import Footer from './../components/footer/Footer.component';

const DashBoardLayout = props => {
  // const dispatch = useDispatch();

  // const signOut = () => {
  //   dispatch(signOutUserStart());
  // };

  return (
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/dashboard">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => auth.signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;
