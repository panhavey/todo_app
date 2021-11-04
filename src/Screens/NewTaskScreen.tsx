import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {SPACING} from '../Constants/theme';

export const NewTaskScreen = (props: any) => {
  const navigation = useNavigation();
  const {dark, colors} = useSelector((state: any) => state.theme);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: SPACING,
      }}>
      <TouchableOpacity
        containerStyle={{
          alignSelf: 'flex-end',
        }}
        onPress={() => navigation.goBack()}>
        <View
          style={{
            padding: 10,
            borderWidth: 1.5,
            borderColor: colors.borderColor,
            borderRadius: 50,
          }}>
          <FeatherIcon
            name="x"
            size={22}
            color={dark ? colors.text : colors.secondary}
          />
        </View>
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput
          autoFocus
          placeholder="Enter new task"
          placeholderTextColor={dark ? colors.text : colors.secondary}
          style={{
            fontSize: 30,
            padding: SPACING,
            alignSelf: 'flex-start',
          }}
        />

        <View style={{marginBottom: '20%'}}>
          <TouchableOpacity
            containerStyle={{alignSelf: 'flex-start', padding: SPACING}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: SPACING,
                borderWidth: 1.5,
                borderColor: colors.borderColor,
                borderRadius: 50,
              }}>
              <FeatherIcon
                name="calendar"
                size={22}
                color={dark ? colors.text : colors.secondary}
              />
              <Text
                style={{
                  color: dark ? colors.text : colors.secondary,
                  fontWeight: 'bold',
                  paddingLeft: '5%',
                }}>
                Today
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            paddingHorizontal: SPACING,
          }}>
          <TouchableOpacity>
            <FeatherIcon
              name="folder-plus"
              size={22}
              color={dark ? colors.text : colors.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon
              name="flag"
              size={22}
              color={dark ? colors.text : colors.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FeatherIcon
              name="moon"
              size={22}
              color={dark ? colors.text : colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
