// app/details/index.tsx
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import TvScreen from '@/components/tvscreen/TvScreen';

export default function Hometv() {
  return (
    <View style={{flex:1}}>
      {/* <Text>Home tv Screen</Text> */}
      <TvScreen></TvScreen>
    </View>
  );
}