import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Topo from './components/Topo';

export default function App() {
  return (

    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      {/* ===== LOGO ===== */}
      <View style={styles.logoArea}>
        <Ionicons name="code-slash-outline" size={48} color="#FFF" />
        <Text style={styles.logoTexto}>Linguagens de Progamação</Text>
        <Text style={styles.logoSubtitulo}>Escolha sua linguagem favorita</Text>
      </View>

      {/* ===== CARDS ===== */}
      <View style={styles.gridArea}>

        {/* JavaScript e Python */}
        <View style={styles.linha}>
          <Topo
            nome="JavaScript"
            descricao="Linguagem essencial para web."
            nivel="⭐ Iniciante"
            icone="logo-javascript"
            imagem={require('../assets/javascript.jpg')}
          />
          <Topo
            nome="Python"
            descricao="Usada em IA e automações."
            nivel="⭐ Iniciante"
            icone="logo-python"
            imagem={require('../assets/python.jpg')}
          />
        </View>

        {/* Java e TypeScript */}
        <View style={styles.linha}>
          <Topo
            nome="Java"
            descricao="Muito usada em sistemas corporativos."
            nivel="🔶 Intermediário"
            icone="cafe-outline"
            imagem={require('../assets/java.jpg')}
          />
          <Topo
            nome="TypeScript"
            descricao="JavaScript com tipagem estática."
            nivel="🔶 Intermediário"
            icone="code-outline"
            imagem={require('../assets/ts.jpg')}
          />
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#d2d2dd',
  },

  logoArea: {
    backgroundColor: '#220031',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },

  logoTexto: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 8,
  },

  logoSubtitulo: {
    fontSize: 14,
    color: '#cdb0cf',
    marginTop: 4,
  },

  
  gridArea: {
    padding: 12,
    gap: 12,
  },

  linha: {
    flexDirection: 'row',
    gap: 12,
  },

});