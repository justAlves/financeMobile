import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';
import 'react-native-gesture-handler';



export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes/>
        <StatusBar style="light" translucent />
      </NavigationContainer>
    </AuthProvider>
  );
}


