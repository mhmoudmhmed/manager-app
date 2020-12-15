/* eslint-disable prettier/prettier */
import React from 'react';
import {View,StyleSheet} from 'react-native';
const Card = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth:1,
    borderRadius:2,
    borderBottomWidth:0,
    borderColor:'#000',
    shadowColor:'#000',
    shadowOpacity:0.1,
    shadowOffset:{width:0, height:2},
    shadowRadius:2,
    elevation:1,
    marginTop: 10,
    marginLeft:5,
    marginRight:5,
  },
});
export default Card;
