/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = ({ Children, onAccept, onDecline, visible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CardSection>
              <Text style={styles.modalText}>{Children}</Text>
            </CardSection>

            <CardSection>
              <Button onPress={onAccept}>Yes</Button>
              <Button onPress={onDecline}>No</Button>
            </CardSection>

            {/*
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Are you Sure you want to delete this ?</Text>
            </TouchableHighlight>
            */}
          </View>
        </View>
      </Modal>

      {/*
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgb(0,0,0,0.1)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Confirm;
