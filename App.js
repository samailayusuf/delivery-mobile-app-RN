import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './screens/Onboarding'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'
import Register from './screens/Register'
import Dashboard from './screens/Dashboard'
import PendingOrders from './screens/PendingOrders'
import OrderDetails from './screens/OrderDetails'

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen  options={{headerShown: false}}  name="Onboarding" component={Onboarding}/>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
         <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
         <Stack.Screen options={{headerShown: false}} name="PendingOrders" component={PendingOrders} />
         <Stack.Screen name="OrderDetails" component={OrderDetails} />
         </Stack.Navigator>
       </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
