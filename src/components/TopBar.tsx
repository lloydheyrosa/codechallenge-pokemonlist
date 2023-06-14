import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, View, Text, StyleProp, ViewStyle} from 'react-native';
import Palette from '../theme/Pallete';
import {textAppearance} from '../theme/TextAppearance';
import {strings} from '../localization/strings';
import {Appbar} from 'react-native-paper';

type TopBarProps = {
  containerStyle?: StyleProp<ViewStyle> | undefined;
  onDrawerClicked?: () => void | undefined;
};

const TopBar = React.memo<TopBarProps>(
  ({containerStyle = {}, onDrawerClicked}) => {
    return (
      <Appbar.Header mode="center-aligned" style={containerStyle}>
        <Appbar.Action icon="menu" />
        <Appbar.Content title={strings.appName} />
      </Appbar.Header>
    );
  },
);

const styles = StyleSheet.create({
  baseContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: Palette.Black,
  },
  title: {
    fontWeight: 'normal',
    marginEnd: 6,
  },
  calendarPickerContainer: {
    flex: 1,
  },
  badgeContainer: {
    position: 'absolute',
    backgroundColor: Palette.AlertRed,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  badgeText: {
    color: Palette.White,
  },
  notificationContainer: {
    alignItems: 'flex-end',
  },
});

export default TopBar;
