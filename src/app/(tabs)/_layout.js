import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons'; // ou use Feather, AntDesign, etc.

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: { backgroundColor: "#330045" },
                headerTintColor: "white",
                tabBarActiveTintColor: "#9D1A52",
                tabBarInactiveTintColor: "#8C5A6E",
            }}
        >
            <Tabs.Screen 
                name="home" 
                options={{ 
                    headerShown: false,
                    title: "Início",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name="contact" 
                options={{
                    headerShown: true, 
                    title: "Contato",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-add" size={size} color={color} />
                    ),
                }} 
            />
        </Tabs>
    );
}