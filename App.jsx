import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DoubleTapGesture from './src/DoubleTapGesture'; // Import the custom component

const App = () => {
  const [isDoubleTapEnabled, setDoubleTapEnabled] = useState(true);

  const toggleDoubleTap = () => {
    setDoubleTapEnabled(prevState => !prevState);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      {isDoubleTapEnabled ? (
        <DoubleTapGesture>
          <View>
            <Text style={styles.whiteText}>
              Double-tap anywhere on the screen!
            </Text>
          </View>
        </DoubleTapGesture>
      ) : (
        <View>
          <Text style={styles.whiteText}>Double-tap is disabled.</Text>
        </View>
      )}
      <Button title="Toggle Double Tap" onPress={toggleDoubleTap} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  whiteText: {
    color: 'white',
    fontSize: 20,
  },
});

export default App;
