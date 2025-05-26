import React from 'react';
import { View } from 'react-native';
import { CategoryGrid } from '../components/CategoryGrid';

export const CategoryScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
      <CategoryGrid />
    </View>
  );
};