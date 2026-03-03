import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function Topo(props) {
  return (

    <View style={styles.card}>
      <Image source={props.imagem} style={styles.cardImagem} />
      <View style={styles.cardCorpo}>
        <View style={styles.cardTituloRow}>
          <Ionicons name={props.icone} size={16} color="#39006e" />
          <Text style={styles.cardTitulo}>{props.nome}</Text>
        </View>
        <Text style={styles.cardDescricao}>{props.descricao}</Text>
        <Text style={styles.cardNivel}>{props.nivel}</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    flex: 1, 
  },

  cardImagem: {
    width: '100%',
    height: 100,
  },

  cardCorpo: {
    padding: 10,
  },

  cardTituloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },

  cardTitulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#20232A',
  },

  cardDescricao: {
    fontSize: 11,
    color: '#666',
    marginBottom: 6,
  },

  cardNivel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#25003e',
  },
});

export default Topo;