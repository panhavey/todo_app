import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {Card, CategorySlider, FloatingButton} from '../Components';
import {useTranslation} from 'react-i18next';
import {switchTheme} from '../Redux/Slices';
import {darkTheme, lightTheme} from '../Constants/theme';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const Header = () => {
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();
  const {dark, colors} = useSelector((state: any) => state.theme);
  const {setItem, mergeItem} = useAsyncStorage('@init');

  const updateTheme = async () => {
    const theme = dark ? lightTheme : darkTheme;
    dispatch(switchTheme(theme));
    await mergeItem(JSON.stringify({theme}));
  };

  const updateLang = async () => {
    const lang = i18n.language === 'en' ? 'kh' : 'en';
    i18n.changeLanguage(lang);
    await mergeItem(JSON.stringify({lang}));
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={updateLang}>
        <Text style={{color: colors.text}}>{t('lang')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={updateTheme}>
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <CategorySlider />
        {/* <View>
          <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Todo')}>
              <Card>
                <Text style={{color: colors.text}}>{t('Hello')}</Text>
              </Card>
            </TouchableOpacity>
          </View>
        </View> */}

        <FloatingButton onPress={() => props.navigation.navigate('NewTask')} />
      </View>
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
