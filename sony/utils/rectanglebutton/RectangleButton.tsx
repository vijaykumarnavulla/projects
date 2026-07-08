import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { ViewStyle } from 'react-native';
interface RectangleButtonProps {
  value: string;
  onPress: (value: string) => void;
  style?: ViewStyle;
}

const RectangleButton: React.FC<RectangleButtonProps> = ({ value, onPress,style }) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  const handleButtonPress = () => {
    startAnimation();
    onPress(value); // Call the onPress function passed as a prop
  };

  const startAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      animationValue.setValue(0);
    });
  };

  const animatedStyle = {
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.05],
        }),
      },
    ],
  };

  return (
    <View  style={[styles.container, style]}>
      <Animated.View style={[styles.buttonContainer, animatedStyle, { backgroundColor: value }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleButtonPress}
          activeOpacity={0.7}
        >
          {/* <Text style={styles.buttonText}>{value}</Text> */}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: '#4eb96b',
    borderRadius: 8, // Change the border radius to make it rectangular
    overflow: 'hidden',
  },
  button: {
    width: 85,
    height: 38, // Adjust the height to make it rectangular
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RectangleButton;