import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    'Digital-7': require('../assets/Fonts/digital-7.ttf')
  });
