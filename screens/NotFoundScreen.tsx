import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RootStackScreenProps } from '../types';

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const GoToLogin = () => {
    navigation.replace('Login')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>

      <TouchableOpacity onPress={GoToLogin} style={styles.link}>
        <Text style={styles.linkText}>
          
          {/* <View> */}
            <FontAwesome
              name="sign-out"
              style={styles.iconLogout}
            />{' '}Logout! 
          {/* </View> */}
        </Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 18,
    color: '#2e78b7',
  },
  iconLogout: {
    marginLeft: 15,
    fontSize: 25,
    color: '#2e78b7'
  }
});
