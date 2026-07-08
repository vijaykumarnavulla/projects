import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

interface CircleButtonProps {
    text: string;
    onPress: (value: string) => void;
  }


const CircleButton:React.FC<CircleButtonProps>  = ({ text, onPress }) => {
    const animationValue = useRef(new Animated.Value(0)).current;
  
    const handleButtonPress = () => {
      startAnimation();
      onPress(text); // Call the onPress function passed as a prop
    };
  
    const startAnimation = () => {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 200,
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
            outputRange: [1, 1.2],
          }),
        },
      ],
    };
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.buttonContainer, animatedStyle]}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleButtonPress}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{text}</Text>
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
        backgroundColor: '#ca5c5c',
        borderRadius: 50, // Make the container circular
        overflow: 'hidden',
    },
    button: {
        width: 50, // Adjust the width and height to your desired size
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 24, // Increase the font size for better visibility
        fontWeight: 'bold',
    },
});

export default CircleButton;