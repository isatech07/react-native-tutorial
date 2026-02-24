import { View, Text, StyleSheet, Image } from 'react-native';

export default function Topo() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/foto-usuario1.jpg')}
                style={styles.foto}
            />
            <View>
                <Text style={styles.bemVindo}>Bem-vindo 👋</Text>
                <Text style={styles.nome}>Isabelle Silva</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7b00b4',
        width: '100%',
        height: 80,
        paddingHorizontal: 15,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    foto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    bemVindo: {
        color: '#d0f0f7',
        fontSize: 12,
    },
    nome: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    }
})