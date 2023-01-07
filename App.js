import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Views from './src/screens/Views';
import Buttons from './src/screens/Buttons';
import FlatListExample from './src/screens/FlatList';

export default function App() {
  return (
    <View>
      <Views />
      <Buttons />
      <FlatListExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
