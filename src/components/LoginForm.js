import React, { Component } from 'react'
import { Button, Card, CardSection, Input, Spinner } from './common'
import firebase from 'firebase'
import { Text } from 'react-native'

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false };

  renderButton() {
    if(this.state.loading) {
       return <Spinner size="small"/>

    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }



  onButtonPress() {
    const { email, password } = this.state
    this.setState({error: '', loading: true})
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(()=>{
      //try sign in
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }).catch(()=>{
      //show a final error
      this.setState({error: 'Authentication Failed. Sorry :)'})
    })

  }

  render() {
    return(
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles={
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm