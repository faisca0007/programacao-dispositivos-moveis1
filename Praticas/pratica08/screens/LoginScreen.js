import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

function LoginScreen() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  const onSubmit = (data) => {
    Alert.alert("Sucesso", "Login realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      {/* Email Input */}
      <Controller
        control={control}
        name="email"
        rules={{
          required: "E-mail é obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "E-mail inválido"
          }
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, !!errors.email && styles.inputError]}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              error={!!errors.email}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </>
        )}
      />

      {/* Password Input */}
      <Controller
        control={control}
        name="senha"
        rules={{
          required: "Senha é obrigatória",
          minLength: {
            value: 6,
            message: "Senha deve ter no mínimo 6 caracteres"
          }
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, !!errors.senha && styles.inputError]}
              placeholder="Senha"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={!!errors.senha}
            />
            {errors.senha && (
              <Text style={styles.errorText}>{errors.senha.message}</Text>
            )}
          </>
        )}
      />

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Links */}
      <Text style={styles.linkText}>Esqueceu sua senha? Recuperar senha</Text>
      <Text style={styles.linkText}>Criar Conta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    textAlign: 'center',
    color: '#007AFF',
    marginBottom: 10,
    fontSize: 14,
  },
});

export default LoginScreen;