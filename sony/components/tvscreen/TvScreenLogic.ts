import ApiService from "@/services/ApiService";
import Bravia from '../../utils/Bravia';

export const handlePower = ( status: boolean) => {
  ApiService.send('system', 'setPowerStatus', { status });
};

export const homeBtn = () => {

const bravia = new Bravia('192.168.0.104', 80, '1234');

bravia
  .send('AAAAAQAAAAEAAABgAw==')
  .then(() => {
    console.log('IRCC code sent successfully');
  })
  .catch((error) => {
    console.error('Error sending IRCC code:', error);
  });

};

export const handleExtInput = ( kind: string, port: string) => {
  const uri = `extInput:${kind}?port=${port}`;
  ApiService.send('avContent', 'setPlayContent', { uri });
};

export const handleApp = ( apptype: string, url: string) => {
  const uri = `localapp://webappruntime?${apptype}=${url}`;
  ApiService.send('appControl', 'setActiveApp', { uri, data: '' });
  
};

export const getApplicationList = ( apptype: string, url: string) => {
  const uri = `localapp://webappruntime?${apptype}=${url}`;
  ApiService.send('appControl', 'getApplicationList', null);
};

export const handleMute = ( on: boolean) => {
  ApiService.send('audio', 'setAudioMute', { status: on });
  ApiService.send('system', 'Play', null);
};

export const handleVolumeChange = ( val: string) => {
  ApiService.send('audio', 'setAudioVolume', { target: 'speaker', volume: val });
};

export const handleGetWebAppStatus = (ip: string, psk: string) => {
  ApiService.send('appControl', 'getWebAppStatus', null);
};

export const handleTerminateApps = (ip: string, psk: string) => {
  ApiService.send('appControl', 'terminateApps', null);
};