import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList, Alert, Modal } from 'react-native';

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
  const [modalVisible, setModalVisible] = useState(false);

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
        {/* New Button to open Modal */}
        <Button title="Show More Info" onPress={() => setModalVisible(true)} color="#28a745" />
      </View>
      {/* Modal Component */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>More Protein Info</Text>
            <Text style={{ marginBottom: 20, textAlign: 'center' }}>
              Protein shakes are a convenient way to add protein to your diet and support your fitness goals!
            </Text>
            <Button title="Close" onPress={() => setModalVisible(false)} color="#c81515ff" />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
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
    alignSelf: 'center',
    width: '100%',
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
    elevation: 5,
  },
});



