import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Enter Your Details</Text>

      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginVertical: 10 }}
      />
      
      <TextInput
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginVertical: 10 }}
      />

      <TextInput
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 10, width: '80%', marginVertical: 10 }}
      />

      <Button title="Calculate Life Expectancy" onPress={() => alert(`Your Age: ${age}`)} />
    </View>
  );
}