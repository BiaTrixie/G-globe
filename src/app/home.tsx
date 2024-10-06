import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Lógica de cadastro aqui
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Todo App!</Text>
      <Text style={styles.subtitle}>Your journey starts here</Text>

      <TextInput
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <Pressable onPress={() => console.log('Navigate to login')}>
        <Text style={styles.loginLink}>Log in?</Text>
      </Pressable>

      <Button
        mode="contained"
        onPress={handleSignUp}
        style={styles.button}
      >
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  loginLink: {
    color: '#6200ee',
    textAlign: 'right',
    marginBottom: 20,
  },
});

export default SignUpScreen;
