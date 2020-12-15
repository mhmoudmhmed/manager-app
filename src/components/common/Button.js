/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
const Button = ({ onPress,Children }) => {
  return (
    <View>
      <TouchableOpacity style={styles.buttinStyle} onPress={onPress} >
        <Text style={styles.textStyle}>{Children}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttinStyle: {
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    marginLeft:5,
    marginRight:5,
  },
  textStyle: {
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    fontWeight:600,
    paddingTop:10,
    paddingBottom:10,
  },
});
export default Button;
