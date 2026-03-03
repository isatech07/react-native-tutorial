import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CardUser from './components/CardUser';

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <CardUser 
          avatar={"https://github.com/isatech07.png"}
          name={"Isabelle Silva"}
          email={"isabelle.silva@gmail.com"}
        />
        <CardUser
          avatar={"https://github.com/camyf7.png"}
          name={"Camily"}
          email={"camily.silva@gmail.com"}
        />
        <CardUser 
          avatar={"https://github.com/MMVonnSeek.png"}
          name={"Max Müller"}
          email={"max.mueller@gmail.com"}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    //justifyContent: 'center',
  }
});