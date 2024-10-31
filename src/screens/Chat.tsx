import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { fetchChatData } from '../api/chatService';
import Background from '../Components/Background';
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
    if (input.trim()) {
      addMessage({ id: Date.now().toString(), text: input.trim(), role: 'user' });
      setInput('');
     
      setIsTyping(true);
      setTimeout (async () => {
        const apiResponse: any = await fetchChatData({ message: input, timestamp: new Date().toISOString(), role: 'user' });
        if (apiResponse) {
          addMessage({ id: Date.now().toString(), text: apiResponse.response, role: 'assistant' });
          setIsTyping(false);
        }
      }, 2000)
    
    }
  };

  const addMessage = (newMessage: Message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);
  };

  return (
    <Background>
      <View style={styles.container}>
        <FlatList
          data={[...messages].reverse()}
          renderItem={({ item }) => (
            <AnimatedMessage message={item.text} role={item.role}/>
          )}
          keyExtractor={(item) => item.id}
          inverted
        />
        {isTyping && (
        <View style={styles.typingIndicatorContainer}>
          <LoadingDots />
        </View>
      )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#1ca3c9',
    marginRight: 15,
  },
  userMessageText: {
    color: '#fff',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    marginLeft: 10,
  },
  assistantMessageText: {
    color: '#000',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    marginTop: 10,
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
    backgroundColor: '#1ca3c9',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  typingIndicatorContainer: {
    alignSelf: 'flex-start',
    // marginLeft: 10,
    margin: 10,
    padding: 5,
  },
});

export default Chat;
