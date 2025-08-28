import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, Alert,  } from 'react-native';

  const data = [
    { id: '1', benefit: 'Supports muscle growth and recovery' },
    { id: '2', benefit: 'Convenient source of high-quality protein' },
    { id: '3', benefit: 'Helps control appetite and cravings' },
    { id: '4', benefit: 'Aids in weight management' },
    { id: '5', benefit: 'Boosts metabolism temporarily' },
  ];

const renderItem = ({ item }: { item: { id: string; benefit: string } }) => (
    <Text style={styles.item}>• {item.benefit}</Text> 
  );

export default function App() {
 
  const [count, setCount] = useState(0);
  const handlePress = () => {
    Alert.alert('Protein Power!', 'You clicked the button!');
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The Beauty Of Protein Shakes</Text>
      <Image source={require('./Pictures/protein.jpg')} style={styles.image} />
      <Text style={styles.title}>Benefits of Protein Shakes:</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <View style={styles.buttonContainer}>
        <Button title="Click Me!" onPress={handlePress} color="#007BFF" />
        <Text style={styles.counter}>Clicked {count} times</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center', // Center children horizontally
    // paddingHorizontal: 20, // Optional: remove or reduce for better centering
  },
  header: {
    color: 'blue',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  list: {
    marginBottom: 20,
    alignSelf: 'center', // Center the FlatList
    width: '100%', // Optional: control width
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center', // Center text in list items
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  counter: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});



