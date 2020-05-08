import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Components
import Main from './screens/Main';
import User from './screens/User';
import Starred from './screens/Starred';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#555',
          },
          headerTintColor: '#f2f2f2',
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={Main.navigationOptions}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={User.navigationOptions}
        />
        <Stack.Screen
          name="Starred"
          component={Starred}
          options={Starred.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
