import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import styles from './ArrowButtonStyles';

interface GradientProps {
    icon?:any;
    text?:string;
    onPress: () => void;
    type: 'left' | 'right' | 'up' | 'bottom' | 'enter';
  }

const GradientButton: React.FC<GradientProps>  = ({ onPress, icon, text,type }) => {
  const [buttonStates, setButtonStates] = useState({
      left: { pressed: false },
      right: { pressed: false },
      up: { pressed: false },
      bottom: { pressed: false },
      enter: { pressed: false }});
  const handlePressIn = (type: string) => {
    setButtonStates((prevState: any) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        pressed: true,
      },
    }));
  };

  const handlePressOut = (type: string) => {
    setButtonStates((prevState: any) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        pressed: false,
      },
    }));
  };

    return (
      <TouchableOpacity
        style={[styles.buttonContainer,styles.button]}
        onPress={onPress}
        onPressIn={() => handlePressIn('volume')}
        onPressOut={() => handlePressOut('volume')}
        activeOpacity={0.8}
      >
        <LinearGradient
          colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
          locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1.7, y: 1.7 }}
          style={[styles.button, styles.btnborder, buttonStates[type].pressed && styles.borderele]}
        >
          {icon || <Text style={styles.buttonText}>{text}</Text>}
        </LinearGradient>
        {/* {icon || <Text style={styles.buttonText}>{text}</Text>} */}
      </TouchableOpacity>
    );
  };

  export default GradientButton;