import React, {useState} from 'react';
import {Alert} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';

const DoubleTapGesture = ({children}) => {
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = () => {
    const currentTime = Date.now();
    if (currentTime - lastTap <= 300) {
      Alert.alert('Double-tapped!'); // Alert on double tap
    }
    setLastTap(currentTime);
  };

  return (
    <TapGestureHandler onHandlerStateChange={handleDoubleTap} numberOfTaps={2}>
      {children}
    </TapGestureHandler>
  );
};

export default DoubleTapGesture;
