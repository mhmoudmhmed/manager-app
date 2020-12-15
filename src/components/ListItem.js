/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CardSection from './common/CardSection';

class ListItem  extends Component {
  onRowPress() {
    Actions.EmployeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <CardSection>
          <Text style={styles.TextStyle}> {name} </Text>
        </CardSection>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  TextStyle: {
    fontSize:18,
    paddingLeft:20,
  },
});

export default ListItem;
