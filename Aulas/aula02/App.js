import { View } from "react-native";

function App() {
  return (
  <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-evenly",  backgroundColor: "red" }}>
<View style={{ height:50, width:50, backgroundColor: "blue"}}></View>
<View style={{ height:50, width: 50, backgroundColor: "green"}}></View>
<View style={{height:50, width: 50, backgroundColor: "yellow"}}></View>

</View>
);
}

export default App;
