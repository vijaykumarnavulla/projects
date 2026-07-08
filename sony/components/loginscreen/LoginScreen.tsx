import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Platform, NativeModules } from 'react-native';
import styles from './LoginScreenStyles';
//@ts-ignore
import axios from 'react-native-axios';
// import axios from 'axios';
import ApiService from "@/services/ApiService";
import Feather from '@expo/vector-icons/Feather';
import Modal from 'react-native-modal';
import { LinearGradient } from 'expo-linear-gradient';
import { DeviceEventEmitter } from 'react-native';
import * as Application from 'expo-application';
import * as Device from 'expo-device';

interface LoginScreenProps {
  onTv: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onTv }) => {
  const [ipAddress, setIpAddress] = useState('');
  const [authKey, setAuthKey] = useState('');
  const [ctlType, setCtrlType] = useState('home');
  const [showIcon, setshowIcon] = useState(false);
  const { NetworkModule } = NativeModules;

  const handleLogin = async (ipAddress: string, authKey: string) => {
    // DeviceEventEmitter.emit('myNativeEvent', { ip: '192.168.0.100', psk: 1234 });
    // console.log(Device.brand, Device.modelName, Device.osName, Device.osVersion);
    // console.log("Device Name:", Device.deviceName);
    // console.log("Device Manufacturer:", Device.manufacturer);
    // console.log("Device Design Name:", Device.designName);
    // console.log("Device Type:", Device.deviceType);
    // console.log("Device Type:", Device);
    // console.log("App Version:", Application.nativeApplicationVersion);
    // console.log("Build Version:", Application.nativeBuildVersion);
    // console.log("App ID:", Application.applicationId);
    // const res = await ApiService.send('system', 'getSystemInformation', null);

    onTv();
  };


  return (
    <View style={[
      styles.mainContainer,
      { paddingTop: Platform.OS === 'ios' ? 0 : 0 }
    ]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: Platform.OS === 'ios' ? 5 : 10,
          paddingVertical: Platform.OS === 'ios' ? 2 : 5,
        }}
      >
        <Text style={{ fontSize: 16 }}>check For manual Ip address</Text>
        <Feather name="info" size={24} color="green" onPress={() => setCtrlType('info')} />
      </View>


      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
        }}
      >
        <TouchableOpacity onPress={() => setshowIcon(!showIcon)} >
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4, // optional, for rounded corners
              marginRight: 10, // space between icon and input
            }}
          >
            {showIcon && <Feather name="check" size={24} color="green" />}
          </View>
        </TouchableOpacity>
        {showIcon &&
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#ccc',
              borderRadius: 4,
              paddingHorizontal: 10,
              height: 40,
            }}
            placeholder="Enter Ip Address"
          />}
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'left', marginTop: 20, width: '90%', padding: 10 }}>
          Enable X-Auth-PSK (IP Control){'\n'}{'\n'}
          1. Press HOME on your remote.{'\n'}{'\n'}
          2. Go to Settings.{'\n'}{'\n'}
          3. Scroll to Network → Home Network Setup.{'\n'}{'\n'}
          4. Select IP Control (sometimes under Remote Device/Renderer or External Device Control depending on firmware).{'\n'}{'\n'}
          5. Set Authentication to Normal and Pre-Shared Key or Pre-Shared Key.{'\n'}{'\n'}
          6. In Pre-Shared Key, enter key 1234 — this will be used by external apps to authenticate.{'\n'}{'\n'}
          Make sure Simple IP Control is On (sometimes needed for automation systems).</Text>

        <View
          style={{
            backgroundColor: '#f0f0f0', // light gray, you can change
            padding: 20,
          }}
        >
          <Text style={{ textAlign: 'left', fontSize: 20, fontWeight: 'bold', color: '#333' }}>
            You&apos;r Mobile and TV same WIFI
          </Text>
        </View>

        <TouchableOpacity style={{ width: '100%', height: 70, backgroundColor: '#007AFF', borderRadius: 4, paddingHorizontal: 16 }}
          onPress={() => handleLogin(ipAddress, authKey)}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} >Login </Text>
            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }} >&gt;</Text>
          </View>
        </TouchableOpacity>
      </View>

      {ctlType === 'info' &&

        <View style={{ flex: 1,paddingTop: 50 }}>

          <Modal isVisible>
            <View style={{ flex: 1, backgroundColor: '#fff',marginTop:50 }}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <TouchableOpacity onPress={() => setCtrlType('home')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                  >
                    <Feather name="x" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'left', marginTop: 20, width: '90%', padding: 10 }}>
                Find IP Address on Sony Bravia TV{'\n'}{'\n'}
                1. Press HOME on the remote.{'\n'}{'\n'}
                2. Go to Settings (gear icon).{'\n'}{'\n'}
                3. Scroll down to Network → Network Setup or Network & Internet (wording depends on firmware).{'\n'}{'\n'}
                4. Select View Network Status or Status.{'\n'}{'\n'}
                Look for IP Address — it will show
              </Text>
            </View>
          </Modal>
        </View>
      }
    </View>

  );


};

export default LoginScreen;