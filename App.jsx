import React, {useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import {Text, View, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DoubleTapGesture from './src/DoubleTapGesture'; // Import the custom component

const App = () => {
  const [screenOn, setScreenOn] = useState(true); // Initially the screen is on

  const isPowerButtonSupported = async () => {
    const deviceInfo = await DeviceInfo.getDeviceType();
    console.log('Device type: ', deviceInfo);
  };
  // Function to toggle the screen on/off on double tap
  const toggleScreen = () => {
    console.log('Toggling screen... Current state:', screenOn);
    setScreenOn(prevState => {
      const newState = !prevState;
      console.log('New state after toggle:', newState);
      console.log(
        'Current style applied:',
        newState ? 'screenOn' : 'screenOff',
      ); // Log the new state
      return newState;
    }); // Toggle screen on/off
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <DoubleTapGesture onDoubleTap={toggleScreen}>
        <View style={screenOn ? styles.screenOn : styles.screenOff}>
          <Text style={styles.whiteText}>
            {screenOn
              ? 'Screen is ON. Double-tap to turn it OFF!'
              : 'Screen is OFF. Double-tap to turn it ON!'}
          </Text>
        </View>
      </DoubleTapGesture>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenOn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Screen ON background
  },
  screenOff: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray', // Screen OFF background
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;