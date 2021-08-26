import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';

interface ITitle {
   title: string
}
const ConfigHeader: React.FC<ITitle> = ({ title }: ITitle) => {
   return  <ImageBackground source={require('../assets/images/headerImage.png')} style={styles.header} resizeMode={'contain'} >
         <Text style={styles.text}>{title}</Text>
      </ImageBackground>
}

const styles = StyleSheet.create({
   header: {
      height: 125,
      width: Dimensions.get('window').width,
      marginLeft: -16,
      marginTop: -30,
      marginHorizontal: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   text: {
      fontWeight: '700',
      fontSize: 24,
      color: 'white',
      marginTop: -25
   },
});

export default ConfigHeader