import React, { useState } from 'react';
import { TapGestureHandler } from 'react-native-gesture-handler';

const DoubleTapGesture = ({ children, onDoubleTap }) => {
  const [lastTap, setLastTap] = useState(0);

  const handleDoubleTap = () => {
    const currentTime = Date.now();
    console.log('Handling double tap...');  // Log to check if double tap is detected

    if (currentTime - lastTap <= 300) {
      console.log('Double tap detected!');
      onDoubleTap(); // Trigger the onDoubleTap function passed from the parent
    } else {
      console.log('Not a double tap, resetting timer.');
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
