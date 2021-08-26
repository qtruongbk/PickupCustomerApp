import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import Picker from '../components/Picker';
import SwitchTab from '../components/SwtichTab';

import { CompletedType, CurrentType } from '../constants/Value';
import { MockOrders, MockOrdersComplete } from '../MockData/MockData';

export default function TabTwoScreen() {
  const [typeJobs, setTypeJob] = useState<any>(CurrentType)

  const onFunc = () => {
    Alert.alert('Unfinished function', 'Please try again later!')
  }

  return (
    <View style={styles.container}>
      <SwitchTab onSwitchTab={setTypeJob} tabState={typeJobs} />
      <View style={styles.padding25}>
        {typeJobs === CurrentType && <FlatList
          data={MockOrders}
          renderItem={({ item }) =>
            item.id ? <Card card={item} onPress={onFunc} /> : <Picker />
          }
          keyExtractor={item => item.id}
        />}
        {typeJobs === CompletedType && <FlatList
          data={MockOrdersComplete}
          renderItem={({ item }) =>
            item.id ? <Card card={item} onPress={onFunc} /> : <Picker />
          }
          keyExtractor={item => item.id}
        />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  padding25: {
    paddingBottom: 60
  },
});
