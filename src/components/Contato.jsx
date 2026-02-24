import { View, Text, StyleSheet, Image } from 'react-native';

export default function Contato({ nome, email, foto }) {
    return (
        <View style={styles.container}>
            <Image source={foto} style={styles.foto} />
            <View style={styles.infos}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 15,
        marginBottom: 10,
        padding: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
    },
    foto: {
        width: 55,
        height: 55,
        borderRadius: 27,
    },
    infos: {
        flex: 1,
        marginLeft: 12,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    email: {
        fontSize: 13,
        color: '#888',
        marginTop: 3,
    }
})