import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import HomeScreen from './home/screens/Home';
import PokedexDrawer from '../components/Drawer';
import { strings } from '../localization/strings';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
  return (
    <Drawer.Navigator drawerContent={() => <PokedexDrawer />}>
      <Drawer.Screen name={strings.appName} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainScreen;
