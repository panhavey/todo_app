import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {Card} from '../Components';
import {useTranslation} from 'react-i18next';
import {switchTheme} from '../Redux/Slices';

const Header = (props: any) => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const {dark, colors} = useSelector((state: any) => state.theme);

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() =>
          i18n.changeLanguage(i18n.language === 'en' ? 'kh' : 'en')
        }>
        <Text style={{color: colors.text}}>{t('lang')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(switchTheme());
        }}>
        <FeatherIcon
          name={dark ? 'sun' : 'moon'}
          size={25}
          color={colors.text}
        />
      </TouchableOpacity>
    </View>
  );
};

export const HomeScreen = (props: any) => {
  const {t} = useTranslation();
  const {colors} = useSelector((state: any) => state.theme);

  return (
    <SafeAreaView>
      <Header />
      <TouchableOpacity onPress={() => props.navigation.navigate('Todo')}>
        <Card>
          <Text style={{color: colors.text}}>{t('Hello')}</Text>
        </Card>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
