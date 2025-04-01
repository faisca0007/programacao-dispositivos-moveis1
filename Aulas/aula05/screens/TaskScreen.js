import { use, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, List, TextInput, FAB } from "react-native-paper";

function TaskScreen() {
  const [concluida, setConcluida] = useState(false);
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Lista de Tarefas" />
      </Appbar.Header>
      <List.Item
        onPress={() => setConcluida(!concluida)}
        title="Estudar para a P1"
        right={(props) => (
          <List.Icon {...props} 
          icon={concluida ? "check" : "circle"} />
        )}
      />
      <FAB icon="plus" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default TaskScreen;