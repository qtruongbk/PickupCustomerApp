import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { CompletedType, CurrentType } from '../constants/Value';

interface ISwtichTab {
   tabState: string;
   onSwitchTab: React.Dispatch<React.SetStateAction<string>>
}

const SwitchTab = ({ onSwitchTab, tabState }: ISwtichTab) => {

   const isCurrentActive = () => {
      return tabState === CurrentType 
   }

   return (
      <View style={styles.Tab}>
         <TouchableOpacity onPress={() => onSwitchTab(CurrentType)} style={styles.Grow}>
            <View style={[styles.eachTab, isCurrentActive()? styles.active: null]}>
               <Text style={styles.text}>Current Jobs</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => onSwitchTab(CompletedType)} style={styles.Grow}>
            <View style={[styles.eachTab, !isCurrentActive()? styles.active: null]}>
               <Text style={styles.text}>Completed Jobs</Text>
            </View>
         </TouchableOpacity>
      </View>)
}

const styles = StyleSheet.create({
   Tab: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
   },
   text: {
      fontWeight: '600',
      fontSize: 18,
      paddingTop: 25,
      paddingBottom: 10,
   },
   eachTab: {
      borderColor: 'white',
      borderStyle: 'solid',
      borderBottomWidth: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   Grow: {
      flexGrow: 1
   },
   active: {
      borderColor: '#8FC045',
   }
});

export default SwitchTab