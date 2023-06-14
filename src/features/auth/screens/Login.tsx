import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useAuthStore} from '../store/AuthStore';
import {strings} from '../../../localization/strings';
import {ProgressBar} from 'react-native-paper';
import Palette from '../../../theme/Pallete';
import {textAppearance} from '../../../theme/TextAppearance';
import {SignInButton} from '../../../components/Buttons';

const LoginScreen = () => {
  const signIn = useAuthStore(state => state.signIn);
  const isLoading = useAuthStore(state => state.isLoading);

  return (
    <View style={styles.baseContainer}>
      <Text style={[textAppearance.H1, styles.title]}>{strings.appName}</Text>
      <Text style={[textAppearance.Body, styles.body]}>{strings.subtitle}</Text>
      {isLoading ? (
        <ProgressBar
          indeterminate={true}
          color={Palette.DayActiveGreen}
          style={styles.progressBar}
        />
      ) : (
        <SignInButton
          containerStyle={styles.signInButton}
          onPress={() => {
            signIn();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 40,
    marginTop: 16,
    textTransform: 'uppercase',
  },
  body: {
    marginTop: 4,
  },
  signInButton: {
    marginTop: 40,
  },
  progressBar: {
    width: 150,
    marginTop: 40,
  },
});

export default LoginScreen;
