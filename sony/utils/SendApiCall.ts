import ApiService from "@/services/ApiService";
import Bravia from "./Bravia";
import * as remoteInfoData from '../assets/remoteInfo.json';

interface RemoteInfo {
  bundled: boolean;
  type: string;
}

interface RemoteCommand {
  name: string;
  value: string;
}

interface RemoteData {
  id: number;
  result: [RemoteInfo, Record<string, RemoteCommand>];
}


const rinfo: any = remoteInfoData;

export const SendIrccApiCall = (name: string) => {

  console.log('name key ', name);
  // return;
  const { ip, psk } = ApiService.getConfig();
  const bravia = new Bravia(ip ?? '',80, psk ?? '');
  name = name.charAt(0).toUpperCase() + name.slice(1)

  const keyValueObject = rinfo.result[1].reduce((obj, item) => {
    obj[item.name] = item.value;
    return obj;
  }, {} as any);
  const str = keyValueObject[name];
  if (keyValueObject[name]) {
    bravia
      .send(keyValueObject[name])
      .then(() => {
        console.log('IRCC code sent successfully');
      })
      .catch((error) => {
        console.error('Error sending IRCC code:', error);
      });
  } else {
    console.error(`Command "${name}" not found in remoteInfo.json`);
  }
};