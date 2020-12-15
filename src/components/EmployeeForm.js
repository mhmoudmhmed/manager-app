/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {Picker, Text, StyleSheet, View} from 'react-native';
import CardSection from './common/CardSection';
import Input from './common/Input';

class EmployeeForm extends Component {
  render() {

    const { name, phone, shift } = this.props;

    return (
      <View>
        <CardSection>
          <Input
          label="name"
          placeholder="Jane"
          value={name}
          onChangeText={(value) => this.props.employeeUpdate({ prop: 'name', value })}
        />
        </CardSection>
        <CardSection>
          <Input
          label="Phone"
          placeholder="555-555-555"
          value={phone}
          onChangeText={(value) => this.props.employeeUpdate({ prop: 'phone', value })}
        />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.TextStyle}>Shift</Text>
          <Picker
            style={{flex:1}}
            selectedValue={shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item value="Saturday" label="Saturday" />
            <Picker.Item value="Sunday" label="Sunday" />
            <Picker.Item value="Monday" label="Monday" />
            <Picker.Item value="Tuesday" label="Tuesday" />
            <Picker.Item value="Wendenday" label="Wendenday" />
            <Picker.Item value="Thursday" label="Thursday" />
            <Picker.Item value="Fridy" label="Fridy" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextStyle: {
    fontSize:18,
    paddingLeft:20,
  },
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {name, phone, shift};
};


export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
