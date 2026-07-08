// @ts-ignore
import axios from 'react-native-axios';
import { DeviceEventEmitter } from 'react-native';
// import SOAP from './custom-soap';
let ip: string | null = null;
let psk: string | null = null;

const baseURL = 'http:/'; // Replace with your base URL
DeviceEventEmitter.addListener('myNativeEvent', (data) => {
  // console.log('From native:', data);
  ApiService.setConfig(data.ip, data.psk);
});

type Config = {
  ip: string | null;
  psk: string | null;
};

const ApiService = {



  setConfig: (newIp: string, newPsk: string) => {
    ip = newIp;
    psk = newPsk;
  },
  getConfig: ():Config => {
    return { ip:ip, psk:psk };
  },
  send: async (service: string, method: string, params: any) => {
    if (!ip || !psk) {
      throw new Error('IP and PSK must be set before making API requests');
    }

    try {
      const response = await axios.post(`${baseURL}/${ip}/sony/${service}`, {
        method,
        version: '1.0',
        id: 1,
        params: params ? [params] : [],
      }, {
        headers: {
          'X-Auth-PSK': psk,
        },
      });
      if (response?.data?.error && response.data.error.length > 0) {
        return;
      }
      // console.log(`-- ${service}.${method}(${params ? JSON.stringify(params) : ''}) --\nstatus: ${response.status}\n${JSON.stringify(response.data, null, '  ')}`);
      return response.data?.result[0];
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },


};

export default ApiService;