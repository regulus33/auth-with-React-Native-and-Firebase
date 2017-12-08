import React, { Component } from 'react'
import {View,Text} from 'react-native'
import firebase from 'firebase' //make sure imports from vendor code are above
import { Header, Button, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {

  state = { loggedIn:null};

  componentWillMount() {

    firebase.initializeApp({
      apiKey: 'AIzaSyBoeIgY6S5CQeVvrOCzhr73y0zk-7RzxIg',
      authDomain: 'auth-46f61.firebaseseapp.com',
      databaseURL: 'https://auth-46f61.firebaseio.com',
      projectId: 'auth-46f61',
      storageBucket: 'auth-46f61.appspot.com',
      messagingSenderId: '837094106514'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }


  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return(
           <CardSection>
             <Button
              onPress={()=>{firebase.auth().signOut()}}
             >
                Log Out
             </Button>
           </CardSection>
        )
      case false:
       return <LoginForm/>
      default:
       return(
       <CardSection>
        <Spinner size="large"/>
       </CardSection>
       )
     }
  }




  render() {

    return(

      <View>
        <Header headerText={'Authentication'}/>
        {this.renderContent()}
      </View>

    )

  }

}

export default App