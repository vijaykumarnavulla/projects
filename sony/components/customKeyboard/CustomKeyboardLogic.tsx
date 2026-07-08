import ApiService from '@/services/ApiService';
import { useState } from 'react';

export interface ButtonState {
  pressed: boolean;
}

export interface ButtonStatesMap {
  [key: string]: ButtonState;
}

// Main logic for the keyboard functionality
export const useCustomKeyboardLogic = () => {
  const [isCapital, setIsCapital] = useState<boolean>(false);
  const [letterPressed, setLetterPressed] = useState<any>({});
  const [isAlphabetKeyboard, setIsAlphabetKeyboard] = useState<boolean>(true);
  const [textPress, setTextPress] = useState<any>('');
  const [showCursorIndex,setShowCursorIndex] = useState<any>(textPress.length)
  const [buttonStates, setButtonStates] = useState<ButtonStatesMap>(
    Array.from('abcdefghijklmnopqrstuvwxyz0123456789', (key) => ({ [key]: { pressed: false } })).reduce(
      (acc, cur) => ({ ...acc, ...cur }),
      {}
    )
  );

  const handlePressIn = (key: string): void => {
    setButtonStates((prevState) => ({
      ...prevState,
      [key]: { pressed: true },
    }));
  };

  const handlePressOut = (key: string): void => {
    setTimeout(()=>{
        setButtonStates((prevState) => ({
            ...prevState,
            [key]: { pressed: false },
          }));
    },500);
  };

  const handleKeyPress = async(key: string): void => {
    
    const presskey = key.toString();
    if(presskey === 'fe-corner-left-up') {
      await ApiService.send('appControl', 'setTextForm', textPress);
      return;
    }
    console.log(`Key pressed: ${presskey}`);
    if(key.length === 1){
      if(!isCapital){
        setTextPress(textPress+key);
      }
      else {
        setTextPress(textPress+key.toLocaleUpperCase());
      }
      setShowCursorIndex(textPress.length);
    }
    if(!key){
      setTextPress(textPress+' ');
      setShowCursorIndex(textPress.length);
    }
    switch (presskey) {
      case 'arrow-up':
        setIsCapital(!isCapital); // Toggle capital letters
        break;
      case '123':
        setIsAlphabetKeyboard(false); // Switch to number keyboard
        break;
      case 'back':
        setIsAlphabetKeyboard(true);
        break;
      case 'clear':
         setTextPress('');
         break;
      case 'https://':
        const str = 'https://'+textPress;
        setTextPress(str);
        setShowCursorIndex(str.length-1);
        break;
      case 'fe-x':
        if(showCursorIndex >= 0) {
          const str = textPress.slice(0,showCursorIndex)+textPress.slice(showCursorIndex+1);
          setTextPress(str);
          setLetterPressed({index:showCursorIndex-1})
          setShowCursorIndex(showCursorIndex-1);
        }
        break;
      default:
        break;
    }
  };

  const handlePressLetter = (letter: string, index: number) => {
    console.log(`Key handlePressLetter: ${letter}`);
    setLetterPressed({ index: index });
    setShowCursorIndex(index);
  };

  const handleOutsideBoxClick = () => {
    console.log('handleOutsideBoxClick');
    // Alert.alert('Outside the box clicked!');
    setLetterPressed({index:-2})
    setShowCursorIndex(textPress.length-1);
  };

  return {
    isCapital,
    letterPressed,
    isAlphabetKeyboard,
    buttonStates,
    textPress,
    showCursorIndex,
    handlePressIn,
    handlePressOut,
    handleKeyPress,
    handlePressLetter,
    handleOutsideBoxClick
  };
};