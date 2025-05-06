import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

function RedefinirSenha() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        keyboardType="email-address"
        label={"Email"}
        value=""
        onChangeText={() => {}}
        mode="outlined"
        style={{ marginBottom: 16 }}
      />
      <Button mode="contained" onPress={() => {}}>
        Enviar
      </Button>
    </View>
  );
}

export default RedefinirSenha;
