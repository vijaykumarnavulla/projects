import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import VerticalSlider from '@/utils/verticalslider/VerticalSlider';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CircleButton from '@/utils/custombutton/CircleButton';
import { SendIrccApiCall } from '@/utils/SendApiCall';

const NumberComponent = () => {
  const [value, setValue] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const handleValueChange = (newValue: number) => {
    setValue(newValue);
  };

  const toggleMute = () => {
    // setIsMuted(prev=>!prev);

  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CircleButton text="1" onPress={()=>SendIrccApiCall('Num1')} />
        <CircleButton text="2" onPress={()=>SendIrccApiCall('Num2')} />
        <CircleButton text="3" onPress={()=>SendIrccApiCall('Num3')} />
      </View>
      <View style={styles.row}>
        <CircleButton text="4" onPress={()=>SendIrccApiCall('Num4')} />
        <CircleButton text="5" onPress={()=>SendIrccApiCall('Num5')} />
        <CircleButton text="6" onPress={()=>SendIrccApiCall('Num6')} />
      </View>
      <View style={styles.row}>
        <CircleButton text="7" onPress={()=>SendIrccApiCall('Num7')} />
        <CircleButton text="8" onPress={()=>SendIrccApiCall('Num8')} />
        <CircleButton text="9" onPress={()=>SendIrccApiCall('Num9')} />
      </View>
      <View style={styles.row}>
        <View style={styles.spacer} />
        <CircleButton text="0" onPress={()=>SendIrccApiCall('Num0')} />
        <View style={styles.spacer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 7
  },
  spacer: {
    width: 50, // Adjust the width as needed
  },
});


export default NumberComponent;