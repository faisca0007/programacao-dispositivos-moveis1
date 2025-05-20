import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import BuscaNavigator from "./BuscaNavigator";

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Busca" component={BuscaNavigator} />
    </Tab.Navigator>
  );
}

export default MainNavigator;