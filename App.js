import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './architecture/components/AuthNavigator';
import { Maps } from './architecture/screens/map';

            
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>

      <ExpoStatusBar style="auto" />
    </SafeAreaView>
    // <Maps/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFBC80',
    marginTop:StatusBar.currentHeight
  },
});
