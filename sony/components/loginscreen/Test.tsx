import React, { useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
  },
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    minHeight: 20,
  },
  warning: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  },
});

export default function Test() {
  const [deviceFound, setDeviceFound] = useState<any[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [scanner, setScanner] = useState<any | null>(null);
  const [checkedDevice, setCheckedDevice] = useState<any | null>(null);

  useEffect(() => { 
    if (Platform.OS !== 'web') {
      init();
    }
  }, []);



  const init = async () => {
    const { default: PortScanner } = await import('react-native-find-local-devices');
    const newScanner = new PortScanner({
      timeout: 40,
      ports: [50001],
      onDeviceFound: (device) => {
        console.log('Found device!', device);
        setDeviceFound(prev => [...prev, device]);
      },
      onFinish: (devices) => {
        console.log('Finished scanning', devices);
        setIsFinished(true);
        setCheckedDevice(null);
      },
      onCheck: (device:any) => {
        console.log('Checking IP: ', device.ip, device.port);
        setCheckedDevice(device);
      },
      onNoDevices: () => {
        console.log('Done without results!');
        setIsFinished(true);
        setCheckedDevice(null);
      },
      onError: (error) => {
        console.log('Error', error);
      },
    });
    setScanner(newScanner);
  };

  const start = () => {
    if(scanner) {
      console.log('init');
      reset();
      scanner.start();
    }
  };

  const stop = () => {
    if(scanner) {
      scanner.cancelDiscovering(); 
      scanner.stop(); // Assuming `.stop()` is the correct method to halt scanning
      reset();
      init();
    }
  };

  const reset = () => {
    setCheckedDevice(null);
    setIsFinished(false);
    setDeviceFound([]);
    // setScanner(null); // Potentially unnecessary, depending on behavior of scanner on re-initialization
  };

  return (
    <View style={styles.container}>
      <Text style={styles.warning}>Wi-Fi connection is required!</Text>
      {!checkedDevice && (
        <View style={styles.wrapper}>
          <Button title="Discover devices!" color="steelblue" onPress={start} />
        </View>
      )}
      {isFinished && (
        <View style={styles.wrapper}>
          <Text>Finished scanning!</Text>
          <Button title="Restart discovering" color="green" onPress={init} />
        </View>
      )}
      {deviceFound.length > 0 && (
        <View style={styles.wrapper}>
          {deviceFound.map((device) => (
            <Text key={device.ip}>
              New device found: {device.ip}:{device.port}
            </Text>
          ))}
        </View>
      )}
      <View style={styles.wrapper}>
        {isFinished ? (
          <Button title="Reset" onPress={reset} color="grey" />
        ) : (
          <Button title="Stop discovering" onPress={stop} color="red" />
        )}
      </View>
    </View>
  );
}