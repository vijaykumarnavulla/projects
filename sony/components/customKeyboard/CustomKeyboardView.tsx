import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from '@expo/vector-icons/Feather';
import { useCustomKeyboardLogic } from './CustomKeyboardLogic';
import { styles } from './CustomKeyboardStyles';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values'; 

const CustomKeyboard: React.FC = () => {
  const {
    isCapital,
    letterPressed,
    isAlphabetKeyboard,
    textPress,
    showCursorIndex,
    buttonStates,
    handlePressIn,
    handlePressOut,
    handleKeyPress,
    handlePressLetter,
    handleOutsideBoxClick
  } = useCustomKeyboardLogic();
  const [uniqKeyIds, setUniqKeyIds] = useState<any>({});
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  useEffect(() => {
    let obj: any = {};
    const alphabetKeys = 'qwertyuiopasdfghjklzxcvbnm'.split('');
    const aAlphabetKeys = 'qwertyuiopasdfghjklzxcvbnm'.toUpperCase().split('');
    const numberKeys = '1234567890'.split('');
    const specialChars_one = '!@#$%^&*()'.split('');
    const spicalChars_two = `{}[];"',?`.split('');
    const specialChars_three = `<>~`.split('');
    for (let ele of alphabetKeys) {
      obj['a' + ele] = uuidv4();
    }
    for (let ele of numberKeys) {
      obj['a'+ele] = uuidv4();
      obj['A'+ele] = uuidv4();
    }
    for (let ele of specialChars_one) {
      obj['a'+ele] = uuidv4();
      obj['A'+ele] = uuidv4();
    }
    for (let ele of spicalChars_two) {
      obj['a'+ele] = uuidv4();
      obj['A'+ele] = uuidv4();
    }
    for (let ele of specialChars_three) {
      obj['a'+ele] = uuidv4();
      obj['A'+ele] = uuidv4();
    }
    for (let ele of aAlphabetKeys) {
      obj['A' + ele] = uuidv4();
    }
    setUniqKeyIds(obj);
    setIsInitialized(true);
  }, []);
  const renderLetters = (text: string) => {
    if (text.length)
      return text.split('').map((char: string, index: number) => (
        <React.Fragment key={`char-fragment-${index}`}>
          <Text
          key={`char-text-${index}`}
            style={[
              styles.letter,
              { backgroundColor: index === letterPressed.index ? 'orange' : '#d3d3d34c' },
            ]}
            onPress={() => handlePressLetter(char, index)}
          >
            {char}
          </Text>
          {index === showCursorIndex &&
            <Animated.Text
              style={[styles.text, { opacity: blinkOpacity }]} // Attach the animated opacity
            >
              |
            </Animated.Text>
          }
        </React.Fragment>
      ));
    if (!text.length) {
      return <Animated.Text
        style={[styles.text, { opacity: blinkOpacity }]} // Attach the animated opacity
      >
        |
      </Animated.Text>
    }
  };

  const renderKey = (width: number, key: string, symbol: any = null, size: number = 32): JSX.Element => {
    return (<TouchableOpacity
      key={(isCapital) ? uniqKeyIds['A' + key.toUpperCase()] : uniqKeyIds['a' + key]}
      style={[width > 36 ? styles.buttonRect : styles.button, { width: width }]}
      onPress={() => handleKeyPress(key)}
      onPressIn={() => handlePressIn(key)}
      onPressOut={() => handlePressOut(key)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
        locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.7, y: 1.7 }}
        style={[
          width > 36 ? styles.buttonRect : styles.button,
          styles.btnborder,
          buttonStates[key]?.pressed && styles.borderele,
          { width: width },
        ]}
      >
        {!symbol && !isAlphabetKeyboard && width < 36 && <View style={{ height: 10 }}></View>}
        {symbol ? (
          <Feather name={symbol} size={size} color="orange" />
        ) : (
          <Text style={styles.keyText}>
            {(isCapital && key.length === 1) ? key.toUpperCase() : key.toLowerCase()}
          </Text>
        )}
        {!symbol && !isCapital && <View style={{ height: 10 }}></View>}
        {!symbol && isCapital && <View style={{ height: 4 }}></View>}
      </LinearGradient>
    </TouchableOpacity>)
  };

  const alphabetKeys = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  const numberKeys = '1234567890'.split('');
  const specialChars_one = '!@#$%^&*()'.split('');
  const spicalChars_two = `{}[];"',?`.split('');
  const specialChars_three = `<>~`.split('');
  const blinkOpacity = useRef(new Animated.Value(1)).current;

  // Blinking animation logic
  useEffect(() => {
    // Start infinite blinking animation
    const blinkAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(blinkOpacity, {
          toValue: 0,
          duration: 500, // Time in milliseconds for "invisible"
          useNativeDriver: true,
        }),
        Animated.timing(blinkOpacity, {
          toValue: 1,
          duration: 500, // Time in milliseconds for "visible"
          useNativeDriver: true,
        }),
      ])
    );

    blinkAnimation.start();

    return () => blinkAnimation.stop(); // Cleanup on unmount
  }, [blinkOpacity]);
  // Render only if initialization is completed
  if (!isInitialized) {
    return <Text>Loading...</Text>; // Add a fallback UI while initializing keys
  }
  return (

    <View style={styles.container}>
      <View style={styles.displayBox}
        onStartShouldSetResponder={() => true} // Make the view clickable// Handle click on the box
        onResponderRelease={() => handleOutsideBoxClick()} >
        <Text style={styles.text}>{renderLetters(textPress)}</Text>
      </View>
      {isAlphabetKeyboard && (
        <View>
          <View style={styles.keyboardRow}>
            {alphabetKeys.slice(0, 10).map((key) => renderKey(35, key))}
          </View>
          <View style={styles.keyboardRow}>
            {alphabetKeys.slice(10, 19).map((key) => renderKey(35, key))}
          </View>
          <View style={styles.keyboardRow}>
            {renderKey(35, 'arrow-up', 'arrow-up')}
            {alphabetKeys.slice(19).map((key) => renderKey(35, key))}
            {renderKey(35, 'fe-x', 'x', 24)}
          </View>
          <View style={styles.keyboardRow}>
            {renderKey(35, ':')}
            {renderKey(35, '/')}
            {renderKey(35, '.')}
            {renderKey(70, 'fe-mic', 'mic', 24)}
            {renderKey(90, '')}
            {renderKey(70, 'fe-corner-left-up', 'corner-left-up', 24)}
          </View>
          <View style={styles.keyboardRow}>
          {renderKey(70, 'fe-globe','globe',24)}
            {renderKey(70, '123')}
            {renderKey(70, 'clear')}
            {renderKey(90, 'https://')}
          </View>
        </View>
      )}
      {!isAlphabetKeyboard && (
        <View>
          <View style={styles.keyboardRow}>
            {numberKeys.map((key) => renderKey(35, key))}
          </View>
          <View style={styles.keyboardRow}>
            {specialChars_one.map((key) => renderKey(35, key))}
          </View>
          <View style={styles.keyboardRow}>
            {spicalChars_two.map((key) => renderKey(35, key))}
          </View>
          <View style={styles.keyboardRow}>
            {specialChars_three.map((key) => renderKey(35, key))}
            {renderKey(35, `\\`)}
            {renderKey(35, '\`')}
          </View>
          <View style={styles.keyboardRow}>
            {renderKey(70, 'back')}
          </View>

        </View>
      )}
    </View>
  );
};

export default CustomKeyboard;