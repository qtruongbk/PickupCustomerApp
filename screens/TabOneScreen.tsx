import * as React from 'react';
import { StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const RegisterNotYet = () => {
    Alert.alert('Unfinished function', 'Please try again later!')
  }

  const Login = () => {
    navigation.replace('Root')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/LoginImage.png')}
        resizeMode={'stretch'} style={styles.tinyLogo}>
          <Text style={styles.banner}>Be Part of the Solution, Not Part of the pollution</Text>
      </ImageBackground>
      <View style={styles.formAuthen}>
        <TouchableOpacity onPress={Login}>
          <View style={styles.buttonLogin}>
            <Text style={styles.strLogin}>Login
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={RegisterNotYet}>
          <View style={styles.buttonRegis}>
            <Text style={styles.strRegis}>Register
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8FC045'
  },
  tinyLogo: {
    width: '100%',
    flex: 7
  },
  formAuthen: {
    flex: 3,
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLogin: {
    width: 300,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 39
  },
  strLogin: {
    fontSize: 16,
    fontWeight: '700'
  },
  buttonRegis: {
    width: 300,
    borderRadius: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9EA32'
  },
  strRegis: {
    fontSize: 16,
    fontWeight: '700',
    color: '#272D37'
  },
  banner: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 36.57,
    width: 341,
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    top: 135,
    textTransform: 'uppercase',
    left: 'auto',
    right: 'auto',
    alignSelf: 'center'
  }
});
