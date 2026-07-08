// App.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Slot } from 'expo-router';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" options={{ headerShown: false }}>
          {() => <Slot />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}