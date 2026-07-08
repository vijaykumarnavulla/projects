import ApiService from "@/services/ApiService";

export const handlePower = ( status: boolean) => {
  ApiService.send('system', 'setPowerStatus', { status });
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