import {StyleSheet} from 'react-native';
import Palette from '../theme/Pallete';
import React from 'react';
import {ButtonProps} from '../util/types/Components';
import {Button} from 'react-native-paper';

const SignInButton = React.memo<ButtonProps>(props => {
  return (
    <Button
      mode="contained"
      onPress={props.onPress}
      style={props.containerStyle}>
      Sign In
    </Button>
  );
});

const styles = StyleSheet.create({
  signInButton: {
    backgroundColor: Palette.White,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 11,
    flexDirection: 'row',
  },
  googleIcon: {
    marginEnd: 14,
  },
  signInText: {
    fontSize: 14,
    fontWeight: '500',
    color: Palette.Black,
    opacity: 0.54,
  },
});

export {SignInButton};
