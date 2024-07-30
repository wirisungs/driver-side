import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import HeaderBlank from '../../components/Header/HeaderBlank';
import { firebase_auth } from '../../firebase/firebaseConfig';

const App = ({ navigation }) => {
  const [mess, setMess] = useState('');
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const user = firebase_auth.currentUser;

    if (user) {
      setEmail(user.email);
      console.log('User email:', user.email); // Debugging log

      const fetchData = async () => {
        try {
          const response = await fetch(`http://10.0.2.2:4003/api/test?email=${user.email}`);
          const messagesData = await response.json();

          if (Array.isArray(messagesData)) {
            setMessages(messagesData);
          } else {
            console.error('Expected array but got:', messagesData);
            setMessages([]); // Fallback to an empty array in case of unexpected response
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setMessages([]); // Set to an empty array in case of error
        }
      };

      fetchData();
    } else {
      console.log('No user is signed in.');
      // You might want to redirect the user to a login screen here
    }
  }, []);

  const handleSubmit = async () => {
    if (!mess.trim()) {
      return;
    }
    try {
      const url = `http://10.0.2.2:4003/api/test`;
      console.log('Fetch URL:', url); 
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email: email,
          Mess: mess,
          Status: 'Staff',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        const fetchData = async () => {
          try {
            const messagesResponse = await fetch(`http://10.0.2.2:4003/api/test?email=${email}`);
            const messagesData = await messagesResponse.json();

            if (Array.isArray(messagesData)) {
              setMessages(messagesData);
            } else {
              console.error('Expected array but got:', messagesData);
              setMessages([]); // Fallback to an empty array in case of unexpected response
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            setMessages([]); // Set to an empty array in case of error
          }
        };

        fetchData();
        setMess(''); // Clear input field
      } else {
        console.error('Error sending data:', result.error || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  if (!email) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderBlank title='Nhắn tin' screenBack='HomeScreen'/>
      <ScrollView style={styles.viewcuon}>
        <View>
          {messages.map((item, index) => (
            <View key={index} style={item.Status === 'Staff' ? styles.cusMessage : styles.staffMessage}>
              <Text style={item.Status === 'Staff' ? styles.cusText : styles.staffText}>
                {item.Mess}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior="padding" style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhắn tin"
          onChangeText={setMess}
          value={mess}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Text style={styles.sendButtonText}>→</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewcuon: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#EDEDED',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#04BF45',
    padding: 15,
    borderRadius: 50,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cusMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#04BF45',
    borderRadius: 20,
    padding: 16,
    margin: 5,
  },
  staffMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E2E2E2',
    borderRadius: 20,
    padding: 16,
    margin: 5,
  },
  cusText: {
    color: '#ffffff',
    fontSize: 12,
  },
});

export default App;