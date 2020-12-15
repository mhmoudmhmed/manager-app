/* eslint-disable prettier/prettier */
import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeDelete, employeeSave} from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import Confirm from './common/Model';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModel : false };
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ value, prop });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift: shift || 'Friday',
      uid: this.props.employee.uid,
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your Upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;
    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModel: false });
  }

  render() {
    const { showModel } = this.props;
    return (
      <Card>
        <EmployeeForm { ...this.props } />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}> Save </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}> Text Schedule </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModel: !showModel })}> Fire </Button>
        </CardSection>

        <Confirm
          visible={showModel}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you Sure you want to delete this ?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeDelete, employeeSave})(EmployeeEdit);
