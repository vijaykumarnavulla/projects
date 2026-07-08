import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import {
  handlePower, handleExtInput, handleApp,
  getApplicationList, handleMute, handleVolumeChange, handleGetWebAppStatus,
  handleTerminateApps, homeBtn
} from './TvScreenLogic';
import styles from './TvScreenStyles';
import SoundComponent from '../soundcomponent/SoundComponent';
import CircleButton from '@/utils/custombutton/CircleButton';
import RectangleButton from '@/utils/rectanglebutton/RectangleButton';
import NumberComponent from '../numbercomponent/NumberComponent';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import ArrowButtons from '../arrowbtncomponent/ArrowButtons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';
import CustomKeyboard from '../customKeyboard/CustomKeyboardView';
import { SendIrccApiCall } from '@/utils/SendApiCall';
import Modal from 'react-native-modal';

const TvScreen = () => {
  const [ip, setIp] = useState('');
  const [psk, setPsk] = useState('');
  const [kind, setKind] = useState('hdmi');
  const [port, setPort] = useState('1');
  const [apptype, setApptype] = useState('url');
  const [url, setUrl] = useState('');
  const [volume, setVolume] = useState('10');
  const [logs, setLogs] = useState<string[]>([]);
  const [showSoundComponent, setShowSoundComponent] = useState(false);
  const [isAudioToggled, setIsAudioToggled] = useState(false);
  const [isPlayToggled, setIsPlayToggled] = useState(false);
  const [isPowerBtn, setIsPowerBtn] = useState(false);
  const [ctlType, setCtrlType] = useState('home');
  const [isPressed, setIsPressed] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    volume: { toggled: false, pressed: false },
    pause: { toggled: false, pressed: false },
    power: { toggled: false, pressed: false },
    delete: { pressed: false },
    home: { pressed: false },
    input: { pressed: false },
    exit: { pressed: false },
    exitall: { pressed: false },
    powerdot: { pressed: false },
    volumedot: { pressed: false },
    numbersdot: { pressed: false },
    playdot: { pressed: false },
    settings: { pressed: false },
    back: { pressed: false },
    tv: { pressed: false },
    help: { pressed: false },
    chup: { pressed: false },
    chdown: { pressed: false },
    play: { pressed: false },
    googleplay: { pressed: false },
    netflix: { pressed: false },
    app: { pressed: false },
    btnback: { pressed: false }
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handlePlayToggle = () => {
    setIsPlayToggled(!isPlayToggled);
  };

  const handleAudioToggle = () => {
    setIsAudioToggled(!isAudioToggled);
  };

  const handlePowerToogle = () => {
    setIsPowerBtn(!isPowerBtn);
    handlePower(isPowerBtn);
  }


  const handleClearLogs = () => {
    setLogs([]);
  };
  const customButtonClick = (val: string) => {
  };

  const handlePress = (str: string) => {
    // setCtrlType(str);
    // setIsPressed(true);
    // setTimeout(() => {
    //   setIsPressed(false);
    // }, 200);
  };

  const handlePressBtnCtl = (str: string) => {
    toggleModal();
    SendIrccApiCall(str);
    switch (str) {
      case 'Options': str = 'settings';
        break;
      case 'Return': str = 'back';
        break;
      case 'ChannelUp': str = 'chup';
        break;
      case 'ChannelDown': str = 'chdown';
        break;
      case 'ApplicationLauncher': str = 'app';
        break;

    }
    onSetFlagBtnPressed(str);
    setTimeout(() => onSetFlagBtnPressed(str), 500);
  }

  const onSetFlagBtnPressed = (str: string) => {
    str = str.toLocaleLowerCase();
    setButtonStates((prevState: any) => ({
      ...prevState,
      [str]: {
        ...prevState[str],
        pressed: !prevState[str].pressed,
      },
    }));

  }
  const handleToggle = (type: string) => {
    setButtonStates((prevState: any) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        toggled: !prevState[type].toggled,
      },
    }));

    switch (type) {
      case 'volume':
        if (buttonStates.volume.toggled) {
          SendIrccApiCall('VolumeUp')
        } else {
          SendIrccApiCall('MuteOn')
        }
        break;
      case 'pause':
        if (buttonStates.pause.toggled) {
          SendIrccApiCall('Play')
        } else {
          SendIrccApiCall('Pause')
        }
        break;
      case 'power':
        if (buttonStates.power.toggled) {
          SendIrccApiCall('PowerOff')
        } else {
          SendIrccApiCall('TvPower')
        }
        break;

    }
  };

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
    <View style={[styles.mainContainer, { backgroundColor: 'lightpink' }]}>
        <View>
          <View>
            <View style={[styles.rowContainer, { gap: 10, margin: 20 }]}>
              <View style={[{}]}>
                <ArrowButtons></ArrowButtons>
              </View>
              <View>
                <View>
                </View>
                <View style={{ flexDirection: 'column', gap: 10 }}>
                  <TouchableOpacity style={[styles.button]}
                    onPress={() => { handleToggle('volume'); }}
                    activeOpacity={0.8}
                  >
                    {/* start={{ x: 0, y: 0 }}  end={{ x: 1, y: 1 }} diagonal
                      start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} horizontal
                      start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} vertical 
                      start={{ x: 0, y: 0}} end={{ x: 1.7, y: 1.7}} diagonal*/}
                    <LinearGradient
                      colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                      locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.7, y: 1.7 }}
                      style={[styles.button, styles.btnborder, buttonStates.volume.pressed && styles.borderele]}
                    >
                      {buttonStates.volume.toggled && <Feather name="volume-x" size={24} color="white" />}
                      {!buttonStates.volume.toggled && <Feather name="volume-x" size={24} color="black" />}
                    </LinearGradient>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}
                    onPress={() => { handleToggle('pause'); }}
                    activeOpacity={0.8}>
                    <LinearGradient
                      colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                      locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.7, y: 1.7 }}
                      style={[styles.button, styles.btnborder, buttonStates.pause.pressed && styles.borderele]}
                    >
                      {buttonStates.pause.toggled && <AntDesign name="pause" size={24} color="white" />}
                      {!buttonStates.pause.toggled && <AntDesign name="pause" size={24} color="black" />}
                    </LinearGradient>

                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}
                    onPress={() => { handlePressBtnCtl('Exit'); }}
                    activeOpacity={0.8}>
                    <LinearGradient
                      colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                      locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1.7, y: 1.7 }}
                      style={[styles.button, styles.btnborder, buttonStates.exit.pressed && styles.borderele]}
                    >
                      <AntDesign name="delete" size={24} color="black" />
                    </LinearGradient>

                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={[styles.rowContainer, { gap: 10 }]}>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => { handleToggle('power') }}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#90EE90', '#90EE90', '#90EE90cf', '#90EE90cf', '#90EE90']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.power.pressed && styles.borderele]}
                  >
                    {/* <Feather name="power" size={24} color="green" /> */}
                    {buttonStates.power.toggled && <Feather name="power" size={24} color="white" />}
                    {!buttonStates.power.toggled && <Feather name="power" size={24} color="green" />}
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => { handlePressBtnCtl('Home'); }}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.home.pressed && styles.borderele]}
                  >
                    <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Home</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => { handlePressBtnCtl('Input'); }}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.input.pressed && styles.borderele]}
                  >
                    <MaterialIcons name="input" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button}
                  activeOpacity={0.8} onPress={() => setCtrlType('keyboard')}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.exitall.pressed && styles.borderele]}
                  >
                    {/* <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Exit</Text> */}
                    <View style={styles.textContainer}>
                      {/* <Octicons name="search" size={24} color="white" /> */}
                       <MaterialIcons name="keyboard" size={40} color="white" style={{marginTop:-9}}/>
                      <View style={[styles.dotContainer]}>
                        <Text style={[styles.dotText,{marginTop:-19}]}>...</Text>
                      </View>
                    </View>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.rowContainer, { gap: 10 }]}>
              <View>
                <TouchableOpacity style={styles.button}
                   onPress={() => setCtrlType('working')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.powerdot.pressed && styles.borderele]}
                  >
                    <View style={styles.textContainer}>
                      <Feather name="power" size={24} color="white" />
                      <View style={styles.dotContainer}>
                        <Text style={styles.dotText}>...</Text>
                      </View>
                    </View>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => setCtrlType('volume')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.volumedot.pressed && styles.borderele]}
                  >
                    <View>
                      <View style={[{ flexDirection: 'row' }]}>
                        <Feather name="volume-x" size={24} color="white" />
                        <View style={[{ width: 10 }]}></View>
                        <Feather name="volume-2" size={24} color="white" />
                      </View>
                      <View style={styles.dotContainer}>
                        <Text style={styles.dotText}>...</Text>
                      </View>
                    </View>
                  </LinearGradient>


                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => setCtrlType('numbers')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.numbersdot.pressed && styles.borderele]}
                  >
                    <View style={styles.textContainer}>
                      <Octicons name="number" size={24} color="white" />
                      <View style={[styles.dotContainer]}>
                        <Text style={styles.dotText}>...</Text>
                      </View>
                    </View>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button}
                   onPress={() => setCtrlType('working')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.playdot.pressed && styles.borderele]}
                  >
                    <View style={styles.textContainer}>
                      <Feather name="play" size={24} color="white" />
                      <View style={styles.dotContainer}>
                        <Text style={styles.dotText}>...</Text>
                      </View>
                    </View>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View style={[styles.container, { width: '90%', paddingLeft: '2%' }]}>
              <View style={[styles.rowContainer, { gap: 1, marginVertical: 0, paddingTop: 17 }]}>
                <RectangleButton value="red" onPress={() => { SendIrccApiCall('Red'); }} />
                <RectangleButton value="green" onPress={() => { SendIrccApiCall('Green'); }} />
                <RectangleButton value="yellow" onPress={() => { SendIrccApiCall('Yellow'); }} />
                <RectangleButton value="lightblue" onPress={() => { SendIrccApiCall('Blue'); }} />
              </View>
            </View>
          </View>


          <View style={[styles.container]}>

            <View style={[styles.rowContainer, { gap: 10 }]}>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('Options')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.settings.pressed && styles.borderele]}
                  >
                    <Feather name="settings" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('Return')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.back.pressed && styles.borderele]}
                  >
                    <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Back</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('Tv')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.tv.pressed && styles.borderele]}
                  >
                    <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Tv</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('Help')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.help.pressed && styles.borderele]}
                  >
                    <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Help</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.rowContainer, { gap: 10 }]}>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('ChannelUp')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.chup.pressed && styles.borderele]}
                  >
                    <Feather name="plus" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <Text style={[{ color: 'black', fontSize: 20, fontWeight: 'bold', paddingTop: 15, paddingRight: 10 }]}>Channel</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('ChannelDown')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.chdown.pressed && styles.borderele]}
                  >
                    <Feather name="minus" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('Play')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.play.pressed && styles.borderele]}
                  >
                    <Feather name="play" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
            </View>

            <View style={[styles.rowContainer]}>
              <View>
                <TouchableOpacity style={[styles.button, { width: 140 }]} onPress={() => handlePressBtnCtl('GooglePlay')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#FF7F7F', '#FF7F7F', '#FF7F7Fcf', '#FF7F7Fcf', '#FF7F7F']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.googleplay.pressed && styles.borderele, { width: 140 }]}
                  >
                    <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Google Play</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={[styles.button, { width: 120 }]} onPress={() => handlePressBtnCtl('Netflix')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#FFFFFF', '#FFFFFF']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.netflix.pressed && styles.borderele, { width: 120 }]}
                  >
                    <Text style={[{ color: 'red', fontSize: 18, fontWeight: 'bold' }]}>NETFLIX</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.button} onPress={() => handlePressBtnCtl('ApplicationLauncher')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.app.pressed && styles.borderele]}
                  >
                    <Text style={[{ color: 'white', fontSize: 18, fontWeight: 'bold' }]}>Apps</Text>
                  </LinearGradient>

                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
      {/* {ctlType === 'volume' &&
        <View style={{ width: '100%', height: '90%' }}>
          <SoundComponent></SoundComponent>
          <TouchableOpacity style={styles.button} onPress={() => setCtrlType('home')}
            activeOpacity={0.8}>
            <LinearGradient
              colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
              locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.7, y: 1.7 }}
              style={[styles.button, styles.btnborder, buttonStates.btnback.pressed && styles.borderele]}
            >
              <Text>Back</Text>
            </LinearGradient>

          </TouchableOpacity>
        </View>

      } */}
       {ctlType === 'volume' &&

        <View style={{ flex: 1 }}>

          <Modal isVisible>
            <View style={{ flex: 1 }}>
              <View style={{flexDirection:'row-reverse',paddingTop:50}}>
                <TouchableOpacity style={styles.button}  onPress={()=>setCtrlType('home')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.btnback.pressed && styles.borderele]}
                  >
                     <Feather name="x" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>
               <SoundComponent></SoundComponent>
            </View>
          </Modal>
        </View>
      }
       {ctlType === 'numbers' &&
     
        <View style={{ flex: 1 }}>

          <Modal isVisible>
            <View style={{ flex: 1 }}>
              <View style={{flexDirection:'row-reverse',paddingTop:50}}>
                <TouchableOpacity style={styles.button}  onPress={()=>setCtrlType('home')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.btnback.pressed && styles.borderele]}
                  >
                     <Feather name="x" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>


             <NumberComponent></NumberComponent> 
            </View>
          </Modal>
        </View>
      }
       {ctlType === 'keyboard' &&
     
        <View style={{ flex: 1 }}>

          <Modal isVisible>
            <View style={{ flex: 1 }}>
              <View style={{flexDirection:'row-reverse',paddingTop:50}}>
                <TouchableOpacity style={styles.button} onPress={()=>setCtrlType('home')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.btnback.pressed && styles.borderele]}
                  >
                     <Feather name="x" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>


              <CustomKeyboard></CustomKeyboard>
            </View>
          </Modal>
        </View>
      }
       {ctlType === 'working' &&
     
        <View style={{ flex: 1 }}>

          <Modal isVisible>
            <View style={{ flex: 1 ,flexDirection:'row-reverse',justifyContent:'space-between',paddingTop:50}}>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.button} onPress={()=>setCtrlType('home')}
                  activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
                    locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1.7, y: 1.7 }}
                    style={[styles.button, styles.btnborder, buttonStates.btnback.pressed && styles.borderele]}
                  >
                     <Feather name="x" size={24} color="white" />
                  </LinearGradient>

                </TouchableOpacity>
              </View>


              <View style={{flex:1,alignSelf:'center'}}>
                <Text style={{fontSize:34,fontWeight:'bold',alignSelf:'center',color:'white'}}>We are Working...</Text>
              </View>
            </View>
          </Modal>
        </View>
      }
      {/* {ctlType === 'numbers' && */}
        {/* <View style={{ width: '100%', height: '90%' }}> */}
          {/* <CustomKeyboard></CustomKeyboard> */}
          {/* <NumberComponent></NumberComponent> */}
          {/* <TouchableOpacity style={styles.button} onPress={() => setCtrlType('home')}
            onPressIn={() => handlePressIn('btnback')}
            onPressOut={() => handlePressOut('btnback')}
            activeOpacity={0.8}>
            <LinearGradient
              colors={['#408EC6', '#408EC6', '#408EC6cf', '#408EC6cf', '#408EC6']}
              locations={[0, 0.4, 0.4, 0.6, 0.6, 0.8, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1.7, y: 1.7 }}
              style={[styles.button, styles.btnborder, buttonStates.btnback.pressed && styles.borderele]}
            >
              <Text>Back</Text>
            </LinearGradient>

          </TouchableOpacity> */}
        {/* </View> */}
       {/* } */}
    </View>

  );
};

export default TvScreen;