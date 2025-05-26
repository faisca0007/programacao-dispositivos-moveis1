// components/StoreItem.js
import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { List, Text } from 'react-native-paper';
import { StoreContext } from '../contexts/StoreContext';

export const StoreItem = ({ item }) => {
  const { stores } = useContext(StoreContext);

  return (
    <View>
      <Text variant="titleMedium">Lojas</Text>
      <FlatList
        data={stores}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <List.Item
            title={`${item.nome} - ${item.endereco}`}
            description={`* ${item.nota} • ${item.categoria}`}
            right={(props) => (
              <List.Icon {...props} icon="heart-outline" onPress={() => {}} />
            )}
          />
        )}
        keyExtractor={(item, index) => `loja-${index}`}
      />
    </View>
  );
};