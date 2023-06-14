/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, Route} from './navigation/Routes';
import LoginScreen from './features/auth/screens/Login';
import MainScreen from './features/main';
import {useAuthStore} from './features/auth/store/AuthStore';
import {PaperProvider} from 'react-native-paper';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isSignedIn = useAuthStore(state => state.isSignedIn);

  function LoginStackScreens() {
    return (
      <Stack.Screen
        name={Route.LOGIN}
        component={LoginScreen}
        options={{headerShown: false, animation: 'fade'}}
      />
    );
  }

  function MainStackScreens() {
    return (
      <>
        <Stack.Screen
          name={Route.MAIN}
          component={MainScreen}
          options={{headerShown: false, animation: 'fade'}}
        />
      </>
    );
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Route.LOGIN}>
          {isSignedIn ? MainStackScreens() : LoginStackScreens()}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
