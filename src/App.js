import React, { Component } from 'react'
import {View,Text} from 'react-native'
import firebase from 'firebase' //make sure imports from vendor code are above
import { Header } from './components/common'
import LoginForm from './components/LoginForm'


class App extends Component {

  componentWillMount() {

    firebase.initializeApp({
      apiKey: 'AIzaSyBoeIgY6S5CQeVvrOCzhr73y0zk-7RzxIg',
      authDomain: 'auth-46f61.firebaseapp.com',
      databaseURL: 'https://auth-46f61.firebaseio.com',
      projectId: 'auth-46f61',
      storageBucket: 'auth-46f61.appspot.com',
      messagingSenderId: '837094106514'
    });

  }

  render() {

    return(

      <View>
        <Header headerText={'Authentication'}/>
        <LoginForm/>
      </View>

    )

  }

}

export default App