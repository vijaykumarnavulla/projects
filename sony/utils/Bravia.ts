//@ts-ignore
import axios, { AxiosRequestConfig } from 'react-native-axios';

const SSDP_SERVICE_TYPE = 'urn:schemas-sony-com:service:IRCC:1';
const SERVICE_PROTOCOLS = [
  'accessControl',
  'appControl',
  'audio',
  'avContent',
  'browser',
  'cec',
  'encryption',
  'guide',
  'recording',
  'system',
  'videoScreen',
];
const DEFAULT_TIME_BETWEEN_COMMANDS = 350;

interface DiscoveredDevice {
  host: string;
  port: number;
  friendlyName: string;
  manufacturer: string;
  manufacturerURL: string;
  modelName: string;
  UDN: string;
}

interface IRCCCode {
  name: string;
  value: string;
}

class ServiceProtocol {
  constructor(bravia: Bravia, protocol: string) {
    // Placeholder implementation
  }
}

export class Bravia {
  private static instance: Bravia;

  private host: string;
  private port: number;
  private psk: string;
  private timeout: number;
  private protocols: string[];
  private delay: number;
  private _url: string;
  private _codes: IRCCCode[] = [];
  public sysObj:any;

   constructor(host: string, port = 80, psk = '0000', timeout = 5000) {
    this.host = host;
    this.port = port;
    this.psk = psk;
    this.timeout = timeout;
    this.protocols = SERVICE_PROTOCOLS;
    this.delay = DEFAULT_TIME_BETWEEN_COMMANDS;

    for (const protocol of this.protocols) {
      //@ts-ignore
      this[protocol] = new ServiceProtocol(this, protocol);
    }

    this._url = `http://${this.host}:${this.port}/sony`;
  }

  public static getInstance(host: string, port = 80, psk = '0000', timeout = 5000): Bravia {
    if (!Bravia.instance) {
      Bravia.instance = new Bravia(host, port, psk, timeout);
    }
    return Bravia.instance;
  }

  static discover(): any {
    // Implementation
  }

  getIRCCCodes(): Promise<IRCCCode[]> {
    return new Promise((resolve, reject) => {
      if (this._codes.length > 0) {
        resolve(this._codes);
        return;
      }

      // Implement the logic to fetch IRCC codes from the Sony device
      // You may need to use a library or native module for making HTTP requests

      resolve([]);
    });
  }

  public send(codes: string | string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const codeArray = Array.isArray(codes) ? codes : [codes];

      const sendCode = async (index: number) => {
        if (index < codeArray.length) {
          const code = codeArray[index];
          if (/^[A]{5}[a-zA-Z0-9]{13}[\=]{2}$/.test(code)) {
            await this.sendIRCCCode(code);
            sendCode(index + 1);
          } else {
            try {
              const irccCodes = await this.getIRCCCodes();
              const ircc = irccCodes.find((c) => c.name === code);
              if (!ircc) {
                reject(new Error(`Unknown IRCC code ${code}.`));
                return;
              }

              await this.sendIRCCCode(ircc.value);
              sendCode(index + 1);
            } catch (error) {
              reject(error);
            }
          }
        } else {
          resolve();
        }
      };

      sendCode(0);
    });
  }

  private sendIRCCCode(code: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const body = `<?xml version="1.0"?>
        <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
            <s:Body>
                <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
                    <IRCCCode>${code}</IRCCCode>
                </u:X_SendIRCC>
            </s:Body>
        </s:Envelope>`;

      const requestConfig: AxiosRequestConfig = {
        method: 'POST',
        url: `${this._url}/IRCC`,
        headers: {
          'Content-Type': 'text/xml; charset=UTF-8',
          'SOAPACTION': '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
          'X-Auth-PSK': this.psk,
        },
        data: body,
        timeout: this.timeout,
      };

      axios(requestConfig)
        .then(() => {
          setTimeout(() => resolve(), this.delay);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Bravia;