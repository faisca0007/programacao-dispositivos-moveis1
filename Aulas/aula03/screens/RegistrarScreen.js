  import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

function RegistrarScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Criar Conta</Text>
      </View>
      <ScrollView>
        <View style={styles.formRegister}>
          <TextInput style={styles.input} placeholder="Nome" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            secureTextEntry
          />
          <Button title="Registrar" color="blue" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  appBar: {
    height: 64,
    backgroundColor: "blue",
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  formRegister: {
    flex: 1,
    paddingHorizontal: 16,
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default RegistrarScreen;
