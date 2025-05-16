import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ title: 'Login' }}
      />
      <Stack.Screen 
        name="RecuperarSenha" 
        component={ForgotPasswordScreen} 
        options={{ title: 'Recuperar Senha' }}
      />
      <Stack.Screen 
        name="CriarConta" 
        component={SignUpScreen} 
        options={{ title: 'Criar Conta' }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;