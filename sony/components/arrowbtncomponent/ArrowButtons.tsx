import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import styles from './ArrowButtonStyles';
import SoundComponent from '../soundcomponent/SoundComponent';
import GradientButton from './GradientButton';
import Bravia from '@/utils/Bravia';
import ApiService from '@/services/ApiService';
import { SendIrccApiCall } from '@/utils/SendApiCall';

const ArrowButtons = () => {

  const handleButtonPress = async (direction:any) => {
    // ApiService.setConfig(ipAddress, authKey);
    // let br = new Bravia('192.168.0.100',80,'1234');
    // // const res = await br.send('AAAAAQAAAAEAAAASAw==');
    // ApiService.setConfig('192.168.0.100','1234');
    // let apis = await ApiService.send('system','getRemoteControllerInfo',[]);
    // const obj = apis.result[1].reduce((acc:any,curr:any)=>{
    //   acc[curr.name] = curr.value;
    //   return acc;
    // },{})
    // const bravia = Bravia.getInstance('192.168.1.100');
    // console.log(obj);
    // console.log(apis.result[1]);
   // const res = await br.getIRCCCodes();
    // if (onTv && res?.result?.length) {
    //   onTv();
    // }
    SendIrccApiCall(direction);
  };

  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <GradientButton type="up"
          onPress={() => handleButtonPress('up')}
          icon={<Feather name="arrow-up" size={24} color="white" />}
        />
      </View>
      <View style={styles.arrowRow}>
        <GradientButton type="left"
          onPress={() => handleButtonPress('left')}
          icon={<Feather name="arrow-left" size={24} color="white" />}
        />
        <GradientButton type="enter"
          onPress={() => handleButtonPress('Confirm')}
          text="Enter"
        />
        <GradientButton type="right"
          onPress={() => handleButtonPress('right')}
          icon={<Feather name="arrow-right" size={24} color="white" />}
        />
      </View>
      <View style={styles.arrowContainer}>
        <GradientButton type="bottom"
          onPress={() => handleButtonPress('down')}
          icon={<Feather name="arrow-down" size={24} color="white" />}
        />
      </View>
    </View>
  );
};


export default ArrowButtons;