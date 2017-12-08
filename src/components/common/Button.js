import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
//check docs for different kind of buttons, they are all prepended with 'touchable'
//treeat it like a view tag, wrap other components in it
//you can also bind event handlers

//you can destructure props as below
//the parent is passing onPress={functionName}
const Button = ({ onPress, children }) => {

  const { buttonStyle, textStyle } = styles

  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
    );
}

styles = {

  textStyle: {
    alignSelf:'center',
    color:'#33cccc',
    fontSize: 16,
    fontWeight:'600',
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    //expand and fill as much area as you can
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#33cccc',
    marginLeft: 5,
    marginRight: 5
  }
}

export { Button }