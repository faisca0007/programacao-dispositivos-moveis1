import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

function ListaHorizontal() {
  const categorias = [
    "Restaurantes",
    "Bares",
    "Lanchonetes",
    "Pizzarias",
    "Sorveterias",
  ];

  return (
    <View>
      <Text variant="titleMedium">Categorias</Text>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtactor={(item, index) => index}
        renderItem={({ item }) => (
          <Button style={{ marginRight: 8 }}>
            {item}
          </Button>
        )}
      />
    </View>
  );
}

export default ListaHorizontal;
