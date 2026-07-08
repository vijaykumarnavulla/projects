import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, PanResponder, Text } from 'react-native';
import debounce from 'lodash/debounce';

interface VerticalSliderProps {
  value: number;
  onValueChange: (newValue: number) => void;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ value, onValueChange }) => {
  const maxTrackHeight = 300;

  const valueToPosition = (value: number, maxPosition: number): number => {
    return (1 - value / 100) * maxPosition;
  };

  const [thumbY, setThumbY] = useState(valueToPosition(value, maxTrackHeight));

  // Debounced onValueChange
  const debouncedValueChange = useCallback(
    debounce((newValue: number) => {
      onValueChange(mapPositionToValue(newValue, maxTrackHeight));
      // onValueChange(newValue);
    }, 150), // 150ms debounce delay
    [onValueChange]
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      let newY = thumbY + gestureState.dy;
      if (newY < 0) newY = 0;
      if (newY > maxTrackHeight) newY = maxTrackHeight;
      setThumbY(newY);
      debouncedValueChange(newY)
      // onValueChange(mapPositionToValue(newY, maxTrackHeight));
    },
    onPanResponderRelease: () => {
      console.log("Final value:", value);
    },
  });

  const mapPositionToValue = (position: number, maxPosition: number): number => {
    return Math.round((1 - position / maxPosition) * 100);
  };

  useEffect(() => {
    setThumbY(valueToPosition(value, maxTrackHeight));
  }, [value]);

  const fillHeight = maxTrackHeight - thumbY;

  const thumbStyle = {
    top: value < 50 ? thumbY - 50 : thumbY
  };

  return (
    <View style={styles.container}>
      <Text style={styles.valueDisplay}>{value}</Text>
      <View style={styles.track}>
        <View style={[styles.filledTrack, { height: fillHeight }]} />
        <View {...panResponder.panHandlers} style={[styles.thumb, thumbStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  track: {
    width: 50,
    height: 300,
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
  },
  filledTrack: {
    width: '100%',
    backgroundColor: '#007AFF',
    position: 'absolute',
    bottom: 0,
  },
  thumb: {
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    position: 'absolute',
  },
  valueDisplay: {
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
  },
});

export default VerticalSlider;