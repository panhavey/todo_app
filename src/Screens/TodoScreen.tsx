import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

export const TodoScreen = (props: Props) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('Hello')}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
