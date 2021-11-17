import React from "react";
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import Homepage from "./pages/Homepage.component";
import Search from './pages/Search'

import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Footer from './components/footer/Footer.component'
import Admin from './pages/admin'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser} from './redux/user/user.action'
import WithAdminAuth from './hoc/withAdminAuth'
import AdminToolbar from './components/AdminToolbar'

import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';


class App extends React.Component {


  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              
                id: snapShot.id,
                ...snapShot.data()
              
            }
          );
          
        });
      }
     
      setCurrentUser (userAuth);
      // createUserProfileDocument(userAuth);
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
       <AdminToolbar/>
        <Header/> 
        <Switch>
          <Route exact path='/' component={Homepage} />
          {/* <Route path='/menu' component={ShopPage} /> */}

          <Route path='/search' render={()=>(
            <Search/>
          )}/>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          {/* <WithAdminAuth> */}
          <Route path='/admin' render={()=>(
            <AdminLayout>
            <Admin/>
            </AdminLayout>
          )}/>
          {/* </WithAdminAuth> */}
          
        
        </Switch>
        <Footer/>
      
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect (mapStateToProps,mapDispatchToProps) (App);
