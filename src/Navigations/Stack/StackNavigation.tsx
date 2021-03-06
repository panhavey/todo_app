import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, NewTaskScreen, TodoScreen} from '../../Screens';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="NewTask" component={NewTaskScreen} />
    </Stack.Navigator>
  );
};
