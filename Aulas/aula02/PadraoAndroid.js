
import { View, Text, StyleSheet } from "react-native";

function PadraoAndroid() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Meu App</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 1</Text>
        <Text>Descricao 1</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 2</Text>
        <Text>Descricao 2</Text>
      </View>
      <View style={styles.item}>
        <Text>Item 3</Text>
        <Text>Descricao 3</Text>
      </View>
      <View
        style={{
          height: 48,
          width: 48,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 16,
          position: "absolute",
          bottom: 16,
          right: 16,
          backgroundColor: "lightgray",
        }}
      >
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 64,
    justifyContent: "center",
    paddingLeft: 16,
    backgroundColor: "gray",
  },
  appTitle: { fontSize: 24, color: "white" },
  item: {
    height: 64,
    justifyContent: "center",
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  fab: {
    
  }
});

export default PadraoAndroid;