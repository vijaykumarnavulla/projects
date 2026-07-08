import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './SoundComponentStyles';
import VerticalSlider from '@/utils/verticalslider/VerticalSlider';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ApiService from '@/services/ApiService';
import { SendIrccApiCall } from '@/utils/SendApiCall';


const SoundComponent = () => {
  const [value, setValue] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const handleValueChange = async (newValue: number) => {
    setValue(newValue);
    await ApiService.send('audio', 'setAudioVolume', { "volume": newValue + '', "target": "speaker" });
  };

  const toggleMute = async () => {
    setIsMuted(prev => !prev);
    if (isMuted) {
      SendIrccApiCall('VolumeUp')
    } else {
      SendIrccApiCall('MuteOn')
    }
  };

  useEffect(() => {
    const fetchRemoteControllerInfo = async () => {
      try {
        const apis = await ApiService.send('audio', 'getVolumeInformation', []);
        setValue(apis[0].volume);
        console.log(apis);
        // Do something with apis
      } catch (error) {
        console.error('Failed to fetch remote controller info:', error);
      }
    };

    fetchRemoteControllerInfo();
  }, []);
  return (
    <View style={styles.scontainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sound Settings</Text>
      </View>

      <View style={styles.panel}>
        <View style={styles.column}>
          <VerticalSlider value={value} onValueChange={handleValueChange} />
          {isMuted && <View style={styles.disableView}></View>}
        </View>
        <View style={styles.column}>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => toggleMute()}>
              <SimpleLineIcons name="volume-off" size={24} color={isMuted ? "white" : "black"} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={() => handleValueChange(value + 1)}>
              <MaterialCommunityIcons name="volume-plus" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleValueChange(value - 1)}>
              <MaterialCommunityIcons name="volume-minus" size={24} color="black" />
            </TouchableOpacity>
            {isMuted && <View style={styles.disableView}></View>}
          </View>

        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Adjust sound as needed</Text>
      </View>
    </View>
  );
};

export default SoundComponent;