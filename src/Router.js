/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LogForm from './components/LogForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 63 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LogForm} title="Login" initial />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={ () => Actions.employeeCreate() }
            key="employeeList"
            component={EmployeeList}
            title="Employees List"
            initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Employees Edit" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
