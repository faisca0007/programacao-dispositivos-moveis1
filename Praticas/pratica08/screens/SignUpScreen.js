import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório"),
  email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmarSenha: Yup.string()
    .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});

function SignUpScreen() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({ 
    resolver: yupResolver(schema) 
  });

  const onSubmit = (data) => {
    Alert.alert("Sucesso", "Conta criada com sucesso!");
  };

  return (
    <View style={styles.container}>
      {/* Name Input */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, !!errors.nome && styles.inputError]}
              placeholder="Nome"
              autoCapitalize="words"
              value={value}
              onChangeText={onChange}
              error={!!errors.nome}
            />
            {errors.nome && (
              <Text style={styles.errorText}>{errors.nome.message}</Text>
            )}
          </>
        )}
      />

      {/* Email Input */}
      <Controller
        control={control}
        name="email"
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

      {/* Confirm Password Input */}
      <Controller
        control={control}
        name="confirmarSenha"
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              style={[styles.input, !!errors.confirmarSenha && styles.inputError]}
              placeholder="Confirme a Senha"
              secureTextEntry
              value={value}
              onChangeText={onChange}
              error={!!errors.confirmarSenha}
            />
            {errors.confirmarSenha && (
              <Text style={styles.errorText}>{errors.confirmarSenha.message}</Text>
            )}
          </>
        )}
      />

      {/* Create Account Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>

      {/* Back to Login Link */}
      <Text style={styles.linkText}>Voltar para o Login</Text>
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
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    textAlign: 'center',
    color: '#007AFF',
    fontSize: 14,
  },
});

export default SignUpScreen;