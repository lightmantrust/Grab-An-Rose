import React from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Grab An 🌹 - Mobile Starter</Text>
      <Button title="Open" onPress={() => alert('Use generated SDKs to integrate auth')} />
    </View>
  );
}
