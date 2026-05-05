import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ 
            headerStyle: { backgroundColor: "#330045" },
            headerTintColor: "white",            
        }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false}} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}