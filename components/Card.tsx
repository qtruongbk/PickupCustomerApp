import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { CompletedType } from '../constants/Value';
import { IOrder } from '../MockData/MockData';
import { IconClock, IconDate, IconLocation, IconStreet } from './Icon';

const Card: React.FC<{ card: IOrder, onPress: () => void }> = ({ card, onPress }) => {
   const mainGreen = '#8FC045'
   return (
      <View style={styles.card}>
         <View style={styles.header}>
            <Text style={styles.textHeader}>Job ID: {card.id}</Text>
            <Text style={styles.textHeader}>Earning £{card.amountReceive}</Text>
         </View>
         <View style={styles.row}>
            <IconDate color={mainGreen} />
            <Text style={styles.label}>Start On:</Text>
            <Text style={styles.value}>{card.startOn}</Text>
         </View>
         <View style={styles.row}>
            <IconClock color={mainGreen} />
            <Text style={styles.label}>Time Range:</Text>
            <Text style={styles.value}>{card.timeRange}</Text>
         </View>
         <View style={styles.row}>
            <IconLocation color={mainGreen} />
            <Text style={styles.label}>Pick Up:</Text>
            <Text style={styles.value}>{card.pickUp}</Text>
         </View>
         <View style={styles.row}>
            <IconLocation color={mainGreen} />
            <Text style={styles.label}>Drop Off:</Text>
            <Text style={styles.value}>{card.dropOff}</Text>
         </View>
         <View style={styles.row}>
            <IconStreet color={mainGreen} />
            <Text style={styles.label}>Current Distance:</Text>
            <Text style={styles.value}>{card.currentDistance} miles</Text>
         </View>
         <View style={styles.rowSpecial}>
            <View>
               <Text style={styles.moreLabel}>Distance</Text>
               <Text style={styles.moreValue}>{card.currentDistance} miles</Text>
            </View>
            <View>
               <Text style={styles.moreLabel}>Van Size</Text>
               <Text style={styles.moreValue}>{card.vanSize}</Text>
            </View>
            <View>
               <Text style={styles.moreLabel}>Duration</Text>
               <Text style={styles.moreValue}>{card.duration} Minutes</Text>
            </View>
         </View>
         <View style={styles.footer}>
            {card.status !== CompletedType && <>
               <TouchableOpacity onPress={onPress}>
                  <View style={styles.btnStartJob}>
                     <Text style={styles.strStartJob}>Start Job
                     </Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={onPress}>
                  <View style={styles.btnEndJob}>
                     <Text style={styles.strEndJob}>End Job
                     </Text>
                  </View>
               </TouchableOpacity>
            </>}
            {card.status === CompletedType &&
               <Text style={styles.completed}>Completed</Text>
            }
         </View>
      </View>)
}

const styles = StyleSheet.create({
   card: {
      marginLeft: 25,
      marginRight: 25,
      width: Dimensions.get('window').width - 50,
      height: 416,
      marginBottom: 20,
      marginTop: 10,
      borderRadius: 10,
      position: 'relative',
      backgroundColor: 'white',
      shadowColor: "rgba(0, 0, 0, 0.25)",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 10,
   },
   header: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: 'black',
      marginBottom: 24,
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20
   },
   textHeader: {
      fontSize: 16,
      fontWeight: '600'
   },
   label: {
      fontSize: 14,
      fontWeight: '600',
      color: '#2D9CDB',
      paddingLeft: 15,
      paddingRight: 10
   },
   value: {
      fontSize: 14,
      fontWeight: '600',
      width: 'auto',
      flex: 1
   },
   btnStartJob: {
      width: 150,
      height: 48,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F9EA32',
      borderRadius: 75
   },
   strStartJob: {
      fontSize: 16,
      fontWeight: '700',
      color: '#272D37'
   },
   btnEndJob: {
      width: 150,
      height: 48,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#8FC045',
      borderRadius: 75
   },
   strEndJob: {
      fontSize: 16,
      fontWeight: '700',
      color: 'white'
   },
   footer: {
      position: 'absolute',
      bottom: 0,
      height: 88,
      borderStyle: 'solid',
      borderTopWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0.5)',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingLeft: Dimensions.get('window').width > 400 ? 20 : 0,
      paddingRight: Dimensions.get('window').width > 400 ? 20 : 0,
   },
   row: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 12,
      alignItems: 'flex-start',
      paddingLeft: 20,
      paddingRight: 20
   },
   rowSpecial: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 8,
      justifyContent: 'space-around',
      paddingLeft: 20,
      paddingRight: 20
   },
   moreLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#2D9CDB'
   },
   moreValue: {
      fontSize: 16,
      fontWeight: '600',
   },
   completed: {
      fontSize: 24,
      fontWeight: '700'
   }
});

export default Card