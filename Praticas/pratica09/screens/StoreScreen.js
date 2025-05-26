import React, { useContext, useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StoreContext } from '../contexts/StoreContext';
import { StoreItem } from '../components/StoreItem';

export const StoreScreen = ({ route }) => {
  // Get category from route params and necessary context functions
  const { categoria } = route.params;
  const { loading, searchStore } = useContext(StoreContext);
  const [filter, setFilter] = useState('');

  // Search stores when component mounts or category changes
  useEffect(() => {
    searchStore(categoria, '');
  }, [categoria]);

  return (
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
      <Searchbar
        placeholder={`Buscar em ${categoria}`}
        onIconPress={() => searchStore(categoria, filter)}
        onClearIconPress={() => {
          setFilter('');
          searchStore(categoria, '');
        }}
        onChangeText={setFilter}
        value={filter}
        style={{ marginBottom: 16 }}
      />
      
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <StoreItem />
      )}
    </View>
  );
};