// app/index.tsx
import { View, Text, DeviceEventEmitter, Platform } from 'react-native';
import { Link } from 'expo-router';
import LoginScreen from '@/components/loginscreen/LoginScreen';
import { useNavigation } from '../utils/navigation';
//@ts-ignore
import { Client } from 'react-native-ssdp';
import Bravia from '@/utils/Bravia';
import ApiService from '@/services/ApiService';
import { useEffect, useRef, useState } from 'react';


export default function Home() {
  const { navigate } = useNavigation();

  const client = new Client();
  const localIsSonyTv = useRef(false);
  const [isSonyTv, setIsSonyTv] = useState(false);
  const [lockStatus, setLockStatus] = useState<string>('Unknown');
// const WifiMulticast = Wificast.default;
  // Acquire lock
  // WifiManager.acquireMulticastLock();

  // // Release lock
  // WifiManager.releaseMulticastLock();

  // // Check if held (with Promise)
  // const isHeld:any =  WifiManager.isMulticastLockHeld().then((held: boolean) => {
  //   console.log('Multicast lock held:', isHeld);
  //   return held;
  // });
  

  // client.on('response', async (headers: any, statusCode: any, rinfo: any) => {
  //   if (localIsSonyTv.current) return;
  //   let bravia = new Bravia(rinfo.address, 80, '1234');
  //   DeviceEventEmitter.emit('myNativeEvent', { ip: rinfo.address, psk: 1234 });
  //   const res = await ApiService.send('system', 'getSystemInformation', null);
  //   if (res.product === "TV") {
  //     localIsSonyTv.current = true;
  //     setIsSonyTv(true);
  //     bravia = new Bravia(rinfo.address, 80, '1234');
  //     DeviceEventEmitter.emit('myNativeEvent', { ip: rinfo.address, psk: 1234 });
  //     console.log('res vkn', res);
  //   }
  // });



  // // To search for all SSDP/UPnP services:
  // client.search('ssdp:all');
  // ``
  // // To search for a specific service:
  // client.search('urn:schemas-upnp-org:service:ContentDirectory:1');

  useEffect(() => {
    // Acquire multicast lock for Android only
    // Initialize SSDP client
    client.current = new Client();
    
    client.current.on('response', async (headers: any, statusCode: any, rinfo: any) => {
      if (localIsSonyTv.current) return;
      
      try {
        let bravia = new Bravia(rinfo.address, 80, '1234');
        DeviceEventEmitter.emit('myNativeEvent', { ip: rinfo.address, psk: 1234 });
        
        const res = await ApiService.send('system', 'getSystemInformation', null);
        if (res.product === "TV") {
          localIsSonyTv.current = true;
          setIsSonyTv(true);
          bravia = new Bravia(rinfo.address, 80, '1234');
          DeviceEventEmitter.emit('myNativeEvent', { ip: rinfo.address, psk: 1234 });
          console.log('res vkn', res);
        }
      } catch (error) {
        console.error('Error checking device:', error);
      }
    });

    // Search for devices
    client.current.search('ssdp:all');

    // Cleanup
    return () => {
      if (client.current) {
        client.current.stop();
      }
    };
  }, []);

  const onTvScrren = () => {
    navigate('/hometv');
  }
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen onTv={() => onTvScrren()}></LoginScreen>
    </View>
  );
}
