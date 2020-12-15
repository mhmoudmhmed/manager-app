/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';
const CardSection = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding:5,
    borderBottomWidth:1,
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderColor:'#ddd',
    position:'relative',
  },
});
export default CardSection;
