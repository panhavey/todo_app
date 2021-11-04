import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from '.';
import {AnyIfEmpty, useDispatch, useSelector} from 'react-redux';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {switchTheme} from '../Redux/Slices';
import {Theme} from '../Constants/types';
import i18n from '../Localization/i18n';

export const RootNavigation = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.theme);
  const {getItem, setItem} = useAsyncStorage('@init');

  const getInitStorage = async () => {
    const item = (await getItem()) as string;
    const red = JSON.parse(item);
    console.log(red);

    if (item !== null) {
      const {theme, lang} = JSON.parse(item);
      dispatch(switchTheme(theme));
      i18n.changeLanguage(lang);
    } else {
      const item = {theme, lang: i18n.language};
      await setItem(JSON.stringify(item));
    }
  };

  useEffect(() => {
    getInitStorage();
    // AsyncStorage.clear();
  }, []);

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
