import {useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import JsxAndStylingIntro from './components/1.intro-jsx-and-styling/JsxAndStylingIntro';
import FlexboxPart1 from './components/1.intro-jsx-and-styling/FlexboxPart1';
import FlexboxPart2 from './components/1.intro-jsx-and-styling/FlexboxPart2';
import ImagesFontsAndIcons from './components/1.intro-jsx-and-styling/ImagesFontsAndIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Formhandling from './components/2.form-handling/Formhandling';
import PostList from './components/3.lists/PostList';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Pacifico': require('./assets/fonts/Pacifico-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* 3. Form handling */}
      <PostList />

      {/* 2. Form handling */}
      {/* <Formhandling /> */}


      {/* 1. JSX & styling intro */}
      {/* <ImagesFontsAndIcons /> */}
      {/* <FlexboxPart2 /> */}
      {/* <FlexboxPart1 /> */}
      {/* <JsxAndStylingIntro /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,          // Stretches out, takes up the available space
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#aaa',
    margin: 20,
  }
});
