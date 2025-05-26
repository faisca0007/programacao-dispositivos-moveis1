// components/CategoryGrid.js
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StoreContext } from '../contexts/StoreContext';

export const CategoryGrid = ({ item }) => {
  const { categories } = useContext(StoreContext);
  const navigation = useNavigation();

  return (
    <View>
      <Text variant="titleMedium">Categorias</Text>
      <FlatList
        data={categories}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 4 }}>
            <Button
              mode="outlined"
              icon={item.icone}
              onPress={() =>
                navigation.navigate("Lojas", { categoria: item.nome })
              }
            >
              {item.nome}
            </Button>
          </View>
        )}
        keyExtractor={(item, index) => `categoria-${index}`}
      />
    </View>
  );
};