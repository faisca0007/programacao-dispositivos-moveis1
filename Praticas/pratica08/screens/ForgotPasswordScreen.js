import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');

  const validarEmail = () => {
    if (!email.trim()) {
      setErro("E-mail é obrigatório.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErro("Por favor, insira um e-mail válido.");
    } else {
      setErro("");
      Alert.alert("Sucesso", "Instruções de recuperação enviadas para o e-mail!");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, !!erro && styles.inputError]}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        error={!!erro}
      />

      {/* Renderização condicional da mensagem de erro */}
      {erro && <Text style={styles.erroText}>{erro}</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={validarEmail}  // Função de validação atribuída ao onPress
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Enviar Instruções</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  erroText: {
    color: 'red',
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ForgotPasswordScreen;