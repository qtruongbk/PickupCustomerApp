import React from 'react'
import { Alert, StyleSheet } from 'react-native';
import { Text, TouchableOpacity, View } from 'react-native'
import { IconDropdown } from './Icon';

const Picker = () => {

   const onPicker = () => {
      Alert.alert('Unfinished function', 'Please try again later!')
   }

   return <>
      <Text style={styles.text}>Sort Jobs by:</Text>
      <TouchableOpacity onPress={onPicker}>
         <View style={styles.Boxpicker}>
            <Text style={styles.placeholder}>
               Please select an option
            </Text>
            <IconDropdown color="green" />
         </View>
      </TouchableOpacity>
   </>
}

const styles = StyleSheet.create({

   text: {
      color: '#8FC045',
      fontSize: 18,
      fontWeight: '600',
      paddingTop: 10,
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 10
   },
   Boxpicker: {
      marginHorizontal: 25,
      marginBottom: 40,
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderColor: 'black',
      borderStyle: 'solid',
      borderRadius: 25,
      height: 50,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   placeholder: {
      fontSize: 18,
      fontWeight: '600',
      color: 'rgba(0, 0, 0, 0.5)',
   },
});

export default Picker