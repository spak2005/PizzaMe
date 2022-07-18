import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './architecture/components/AuthNavigator';
import { Popular } from './architecture/screens/Popular';

            
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* {<HomeScreen/>} */}
      {/* <Testing/> */}
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>

      
     
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFBC80',
    marginTop:StatusBar.currentHeight
  },
});