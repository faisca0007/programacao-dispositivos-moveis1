import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

function GaleriaScreen() {
  const imagens = [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
    "https://picsum.photos/200?random=4",
    "https://picsum.photos/200?random=5",
    "https://picsum.photos/200?random=6",
    "https://picsum.photos/200?random=7",
    "https://picsum.photos/200?random=8",
];

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Imagens</Text>
      </View>
      <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
          <TouchableOpacity style={styles.imagem} key={index}>
          <Image style={{flex: 1}} source={{ uri: imagem }}  />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 64,
    padding: 16,
    justifyContent: "center",
    elevation: 3,
    marginBottom: 8,
    backgroundColor: "gray",
  },
  appTitle: {
    fontSize: 24,
    color: "white",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 8,
  },
  imagem: {
    height: 100,
    width: "31%",
  },
});

export default GaleriaScreen;