import React, { useState, useEffect } from 'react';
import { View, PanResponder, PanResponderInstance, PanResponderGestureState } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import styles from './CircularSliderStyles';

interface CircularSliderProps {
  radius: number;
  strokeWidth: number;
  startAngle?: number;
  endAngle?: number;
  value: number;
  onValueChange: (value: number) => void;
}

const CircularSlider: React.FC<CircularSliderProps> = ({
  radius,
  strokeWidth,
  startAngle = 0,
  endAngle = 360,
  value = 0,
  onValueChange,
}) => {
  const [panResponder, setPanResponder] = useState<PanResponderInstance | null>(null);

  // Convert the incoming value (0-100 range) to degrees (0-360 range)
  const degreeValue = (value / 100) * 360;

  useEffect(() => {
    setPanResponder(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true, // Set this to true to respond to movements.
        onPanResponderMove: (_, gestureState) => {
          debugger;
          const { dx, dy } = gestureState;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 180; // Include +180 to shift the starting point to the top
          const adjustedAngle = (angle + 360) % 360;
          // Map angle from degrees back to 0-100 range
          const newValue = (adjustedAngle / 360) * 100;
          onValueChange(newValue);
        },
      })
    );
  }, []);

  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(degreeValue / 360) * circumference} ${circumference}`;
  const rotation = startAngle - 90;  // Adjust rotation to start from the top

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        {/* <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#FFFFFF"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#007AFF"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          fill="none"
          transform={`rotate(${rotation}, ${radius}, ${radius})`}
          {...(panResponder ? panResponder.panHandlers : {})}
        /> */}
      </Svg>
    </View>
  );
};

export default CircularSlider;