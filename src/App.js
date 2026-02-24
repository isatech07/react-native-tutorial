import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Topo from './components/Topo';
import ListaContatos from './components/ListaContatos';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Topo />
      <ListaContatos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfafa',
  }
});