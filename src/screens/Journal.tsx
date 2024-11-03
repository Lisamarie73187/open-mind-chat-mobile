import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import Background from '../Components/Background';
import BottomNavigation from '../Components/BottomNavigation';

const Journal: React.FC = () => {
  const [entry, setEntry] = useState<string>('');
  const [entries, setEntries] = useState<string[]>([]);

  const addEntry = () => {
    if (entry.trim()) {
      setEntries([entry, ...entries]);
      setEntry('');
    }
  };

  return (
    <Background>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your thoughts here..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />
      <Button title="Add Entry" onPress={addEntry} color="#564fbc" />

      <ScrollView style={styles.entriesContainer}>
        {entries.map((item, index) => (
          <View key={index} style={styles.entry}>
            <Text style={styles.entryText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
    <BottomNavigation />
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#564fbc',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    minHeight: 60,
  },
  entriesContainer: {
    marginTop: 20,
  },
  entry: {
    backgroundColor: '#e8eaf6',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  entryText: {
    color: '#333',
  },
});

export default Journal;
