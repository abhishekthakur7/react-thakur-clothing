import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import GlobalSyle from './global.styles';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user-actions';

const HomePage = lazy(() => 
      import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => 
      import('./components/shop/shop.component'));
const CheckoutPage = lazy(() => 
      import('./components/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() => 
      import('./pages/sign-in-sign-up/sign-in-sign-up.component'));

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
      <GlobalSyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
         </ErrorBoundary>
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