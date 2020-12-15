/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet,TextInput,Text} from 'react-native';
const Input = ({ label, value, onChange, placeholder, secureTextEntry }) => {
  return (
    <View className={styles.containerStyle}>
      <Text className={styles.labelStyle}> {label} </Text>
      <TextInput
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        placeholder={placeholder}
        onChangeText={ onChange }
        style={styles.inputStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    height:40,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  inputStyle: {
    height:20,
    width:100,
    color:'#000',
    paddingRight:5,
    fontSize:18,
    lineHeight:23,
    flex:2,
  },
  labelStyle: {
    fontSize:20,
    paddingLeft:20,
    flex:1,
  },
});
export default Input;
