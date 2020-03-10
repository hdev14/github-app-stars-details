import reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = reactotron
    .configure({
      host: '192.168.0.8',
    })
    .useReactNative()
    .connect();
  console.tron = tron;

  tron.clear();
}
