import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useAuthStore} from '../features/auth/store/AuthStore';

const PokedexDrawer = () => {
  const signOut = useAuthStore(state => state.signOut);

  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Title style={styles.title}>Lloyd Heyrosa</Title>
          <Caption style={styles.caption}>Pokemon Trainer</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="arrow-right" color={color} size={size} />
            )}
            label="Log out"
            onPress={() => {
              signOut();
            }}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default PokedexDrawer;
