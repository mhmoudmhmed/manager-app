import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {View, Text} from 'react-native';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

const App = () => {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyD8_vc3oL9wIzeJnGSyDe0R3mNOoqtKuWs',
      authDomain: 'manager-c62e6.firebaseapp.com',
      projectId: 'manager-c62e6',
      storageBucket: 'manager-c62e6.appspot.com',
      messagingSenderId: '637895167491',
      appId: '1:637895167491:web:7a93b6195c9662f1820836',
      measurementId: 'G-X2G3KCD153',
    };
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <View>
        <Text>App</Text>
      </View>
      <Router />
    </Provider>
  );
};

export default App;
