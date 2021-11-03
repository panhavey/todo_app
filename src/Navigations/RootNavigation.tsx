import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from '.';
import {useSelector} from 'react-redux';

export const RootNavigation = () => {
  const theme = useSelector((state: any) => state.theme);

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      text: theme.colors.text,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};
