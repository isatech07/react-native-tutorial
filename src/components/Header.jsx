import {View, Text, StyleSheet} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function Header(){
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FontAwesome style={styles.logo} name="users" size={26} color="#e7612b" />
                <Text style={styles.logotipo}>Users</Text>
            </View>
            <Ionicons name="person-add-outline" size={24} color="#FFF" onPress={() => router.push('/signup')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#0f0027",
        width: "100%",
        height: 46,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between", // ✅ corrigido
    },
    logo:{
        marginRight: 14
    },
    logotipo: {
        color: "#FFF"
    },                    
    logoContainer:{
        flexDirection: "row",
        alignItems: "center"
    }
})