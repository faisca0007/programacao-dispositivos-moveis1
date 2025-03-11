import { View } from "react-native";

function Flexbox() {
  return (
    <View style={{ flex: 1, 
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "streatch",
    backgroundColor: "red" }}>
      <View style={{  
        marginTop: 100,
        width: "100%",
        borderColor: "white",
        borderWidth: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: "blue" }}>        
      </View>
      {/* <View style={{ height:50, width: 50,
        backgroundColor: "green" }}>        
      </View>
      <View style={{ height:50, width: 50,
        backgroundColor: "yellow" }}>        
      </View>     */}
      </View>
  );
}

export default Flexbox;