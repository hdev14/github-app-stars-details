import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import './configs/ReactotronConfig';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Fisrt App</Text>
      </View>
    </>
  );
};

console.tron.log('DEBUG');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default App;
