// Laura Vikström, TIK21KM

import { View } from 'react-native';
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';
import style from './style/style';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    GemunuLibreLight: require('./assets/fonts/GemunuLibre-Light.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={style.container}>
      <Header />
      <Gameboard />
      <Footer />
    </View>
  );
}