import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import {
  handlePower, handleExtInput, handleApp,
  getApplicationList, handleMute, handleVolumeChange, handleGetWebAppStatus,
  handleTerminateApps
} from './SonyTVControllerDemoLogic';
import styles from './SonyTVControllerDemoStyles';
import SoundComponent from '../soundcomponent/SoundComponent';
import CircleButton from '@/utils/custombutton/CircleButton';
import RectangleButton from '@/utils/rectanglebutton/RectangleButton';
import NumberComponent from '../numbercomponent/NumberComponent';

const SonyTVControllerDemoScreen = () => {
  const [ip, setIp] = useState('');
  const [psk, setPsk] = useState('');
  const [kind, setKind] = useState('hdmi');
  const [port, setPort] = useState('1');
  const [apptype, setApptype] = useState('url');
  const [url, setUrl] = useState('');
  const [volume, setVolume] = useState('10');
  const [logs, setLogs] = useState<string[]>([]);
  const [showSoundComponent, setShowSoundComponent] = useState(false);



  const handleClearLogs = () => {
    setLogs([]);
  };
  const customButtonClick = (val: string) => {
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <Button title="Power ON" onPress={() => handlePower(true)} />
        <Button title="Power OFF" onPress={() => handlePower(false)} />
      </View> */}

      <View style={styles.buttonContainer}>
        {/* <Button title="+1" onPress={() => handleVolumeChange( '+1')} />
        <Button title="-1" onPress={() => handleVolumeChange( '-1')} />
        <Button title="Mute" onPress={() => handleMute( true)} />
        <Button title="Unmute" onPress={() => handleMute( false)} /> */}
        {/* <TextInput
          style={styles.input}
          value={volume}
          onChangeText={setVolume}
          keyboardType="numeric"
        />
        <Button title="Set" onPress={() => handleVolumeChange( volume)} /> */}
        {/* <CircleButton text='1' onPress={customButtonClick}></CircleButton> */}
        <TouchableOpacity style={styles.button} onPress={showNumbComponent} >
          <Text>1,2..9</Text>
        </TouchableOpacity>
        {/* <NumberComponent></NumberComponent> */}

        <TouchableOpacity style={styles.button} onPress={toggleSoundComponent} >
          <Text>a</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.colorContainer}>
        <RectangleButton value='red' onPress={customButtonClick}></RectangleButton>
        <RectangleButton value='green' onPress={customButtonClick}></RectangleButton>
        <RectangleButton value='blue' onPress={customButtonClick}></RectangleButton>
        <RectangleButton value='yellow' onPress={customButtonClick}></RectangleButton>
      </View>

      {/* <View style={styles.inputContainer}>
        <Text>Input:</Text>
        <TextInput
          style={styles.input}
          value={kind}
          onChangeText={setKind}
        />
        <TextInput
          style={styles.input}
          value={port}
          onChangeText={setPort}
          keyboardType="numeric"
        />
        <Button title="Go" onPress={() => handleExtInput(kind, port)} />
      </View> */}

      {/* <View style={styles.inputContainer}>
        <Text>URL:</Text>
        <TextInput
          style={styles.input}
          value={url}
          onChangeText={setUrl}
        />
        <TextInput
          style={styles.input}
          value={apptype}
          onChangeText={setApptype}
        />
        <Button title="Go" onPress={() => handleApp(apptype, url)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Web App Status" onPress={() => handleGetWebAppStatus(ip, psk)} />
        <Button title="Terminate Apps" onPress={() => handleTerminateApps(ip, psk)} />
      </View> */}

      {/* <View style={styles.logContainer}>
        <Text style={styles.logTitle}>Result</Text>
        <Button title="Clear" onPress={handleClearLogs} />
        <ScrollView style={styles.logScroll}>
          {logs.map((log, index) => (
            <View><Text key={index} style={styles.logText}>{log}</Text></View>

          ))}
        </ScrollView>
      </View> */}

    </View>
  );
};

export default SonyTVControllerDemoScreen;