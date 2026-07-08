import React, { useState } from 'react';
import { NativeModules, NativeEventEmitter, ScrollView, Text, View } from 'react-native';

interface IDevice {
  ip: string;
  port: number;
}

type DefaultPortScannerCallback = (device: IDevice) => void;

interface IPortScanner {
  ports: number[];
  timeout: number;
  onDeviceFound: DefaultPortScannerCallback;
  onFinish: (devices: IDevice[]) => void;
  onCheck: DefaultPortScannerCallback;
  onNoDevices: () => void;
  onError: (error: string) => void;
}

const { FindLocalDevices } = NativeModules;

if (!FindLocalDevices) {
  console.error('FindLocalDevices module is not available.');
}

const NativeEmitter = new NativeEventEmitter(FindLocalDevices);

class PortScanner {
  _listeners: Array<any> = [];
  readonly ports: number[] = [];
  readonly timeout: number = 40;
  readonly onDeviceFound: DefaultPortScannerCallback;
  readonly onFinish: (devices: IDevice[]) => void;
  readonly onCheck: DefaultPortScannerCallback;
  readonly onNoDevices: () => void;
  readonly onError: (error: string) => void;

  constructor({
    ports = [],
    timeout = 40,
    onDeviceFound,
    onFinish,
    onCheck,
    onNoDevices,
    onError,
  }: IPortScanner) {
    if (!ports.length) {
      throw new Error('Must include at least 1 port to scan');
    }

    this.ports = ports;
    this.timeout = timeout;
    this.onDeviceFound = onDeviceFound;
    this.onFinish = onFinish;
    this.onCheck = onCheck;
    this.onNoDevices = onNoDevices;
    this.onError = onError;

    // Immediately initialize listeners to ensure they're ready
    this.initListeners();
  }

  initListeners = () => {
    this._listeners.push(
      NativeEmitter.addListener('FLD_NEW_DEVICE_FOUND', (device: IDevice) => {
        this.onDeviceFound(device);
      })
    );

    this._listeners.push(
      NativeEmitter.addListener('FLD_RESULTS', (devices) => {
        this.onFinish(devices);
      })
    );

    this._listeners.push(
      NativeEmitter.addListener('FLD_CHECK', (device) => {
        this.onCheck(device);
      })
    );

    this._listeners.push(
      NativeEmitter.addListener('FLD_NO_DEVICES', () => {
        this.clearListeners();
        this.onNoDevices();
      })
    );

    this._listeners.push(
      NativeEmitter.addListener('FLD_CONNECTION_ERROR', (error) => {
        this.onError(error);
      })
    );

    console.log('Event listeners registered');
  };

  clearListeners = () => {
    this._listeners.forEach((l) => l.remove());
    this._listeners = [];
  };

  start = () => {
    this.initListeners();
    // const FindLocalDevices = NativeModules;
    // FindLocalDevices.getLocalDevices({
    //   ports: this.ports,
    //   timeout: this.timeout,
    // });
  };

  stop = () => {
    FindLocalDevices.cancelDiscovering();
    this.clearListeners();
  };
}

const DeviceList: React.FC = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);
//@ts-ignore
  const portScanner = new PortScanner({
    ports: [80, 8080], // Specify the ports to scan
    onDeviceFound: (device) => {
      setDevices((prevDevices) => [...prevDevices, device]);
    },
    onFinish: (foundDevices) => {
      setDevices(foundDevices);
    },
    onCheck: () => {},
    onNoDevices: () => {
      console.log('No devices found');
    },
    onError: (error) => {
      console.error('Error:', error);
    },
  });

  React.useEffect(() => {
    portScanner.start();
    return () => {
      portScanner.stop();
    };
  }, []);

  return (
    <View>
      <Text>Found Devices:</Text>
      <ScrollView>
        {devices.map((device, index) => (
          <Text key={index}>
            IP: {device.ip}, Port: {device.port}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default DeviceList;