import React from 'react'
import { SafeAreaView, SafeAreaViewBase, StatusBar, Text, View } from 'react-native';
import { CalcuScreen } from './src/Screen/CalcuScreen';
import { styles } from './src/theme/appTheme';


const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar
        backgroundColor="black"
        barStyle='light-content'
      />
      {/* ese light content es para iphone la parte de arriba */}
      <CalcuScreen/>
    </SafeAreaView>
  )
}
export default App;