import { View, Text } from "react-native";

function PadraoIOS() {
  return (
    <View style={{ flex: 1, 
    justifyContent: "space-between" }}>
      <View
        style={{
          height: 64,
          backgroundColor: "gray",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize: 24, 
          fontWeight: "bold", color: "white"}}>Meu App</Text>
      </View>
      <View style={{ height: 64, 
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "lightgray" }}>
          <Text>Home</Text>
          <Text>Perfil</Text>
          <Text>Configurações</Text>
        </View>
    </View>
  );
}

export default PadraoIOS;
