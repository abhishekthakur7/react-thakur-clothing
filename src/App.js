import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './components/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user-actions';

const App = ({ checkUserSession, currentUser }) => {

  // componentDidMount() {
  //   const { setCurrentUser } = this.props;

  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => { //onAuthStateChanged is a listener which keeps checking for any change in logged in user, in authentication purpose
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       // const snapSht = await userRef.get();
  //       // this.setState({
  //       //   currentUser : {
  //       //     id: snapSht.id,
  //       //     ...snapSht.data()
  //       //   }
  //       // })

  //       userRef.onSnapshot(snapShot => { //https://firebase.google.com/docs/firestore/query-data/listen, subsribe to any change in currentUser
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         });
  //       });
  //     }

  //     setCurrentUser(userAuth);
  //   });
  // }

  React.useEffect(()=>{
    checkUserSession();

    //return is equivalent for componentWillUnMount
    return () => {
      this.unsubscribeFromAuth();
    }
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);