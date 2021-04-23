import * as React from 'react';
import { StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.headerActions}>
        <MaterialIcons name="connected-tv" size={24} color="white" />
        <Ionicons name="search" size={24} color="white" />
        <AntDesign name="profile" size={24} color="white" />
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 96,
    paddingTop: 12
  }
});
