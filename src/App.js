import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // const snapSht = await userRef.get();
        // this.setState({
        //   currentUser : {
        //     id: snapSht.id,
        //     ...snapSht.data()
        //   }
        // })
        userRef.onSnapshot(snapshot => {  //https://firebase.google.com/docs/firestore/query-data/listen, subsribe to any change in currentUser
          this.setState({
            currentUser : {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, () => { console.log(this.state) })
        });
      } else { //User is not logged in
        this.setState({
          currentUser: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser = { this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} /> 
        </Switch>
      </div>
    );
  }
  
}

export default App;
