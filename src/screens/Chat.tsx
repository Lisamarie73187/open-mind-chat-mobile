import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { fetchChatData } from '../api/chatService';
import AnimatedMessage from '../Components/AnimatedMessage';
import LoadingDots from '../Components/LoadingDots';

interface Message {
  id: string;
  text: string;
  role: 'user' | 'assistant';
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    addMessage({ id: Date.now().toString(), text: input.trim(), role: 'user' });
    setInput('');
    setIsTyping(true);

    setTimeout(async () => {
      const apiResponse: any = await fetchChatData({ message: input, timestamp: new Date().toISOString(), role: 'user' });
      if (apiResponse) {
        addMessage({ id: Date.now().toString(), text: apiResponse.response, role: 'assistant' });
        setIsTyping(false);
      }
    }, 2000);
  };

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
      <View style={styles.container}>
        <FlatList
          data={[...messages].reverse()}
          renderItem={({ item }) => <AnimatedMessage message={item.text} role={item.role} />}
          keyExtractor={(item) => item.id}
          inverted
        />
        {isTyping && (
          <View style={styles.typingIndicatorContainer}>
            <Image source={require('../assets/avatarOne.png')} style={styles.avatarImage} />
            <LoadingDots />
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5d8ff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginTop: 10,
    paddingBottom: 40,
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#2e297e',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  typingIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
});

export default Chat;
