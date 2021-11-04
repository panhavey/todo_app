import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bar as ProgressBar} from 'react-native-progress';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';
import {Card} from '.';
import {SPACING} from '../Constants/theme';
import {Theme} from '../Constants/types';
import {RootState} from '../Redux/store';

const {width} = Dimensions.get('screen');
const CARD_WIDTH = width / 2;

const Category = [
  {
    id: 1,
    name: 'Personal',
    color: '#b53af2',
    taskCount: 20,
    progress: 0.6,
  },
  {
    id: 2,
    name: 'Work',
    color: '#2ae87c',
    taskCount: 5,
    progress: 0.3,
  },
  {
    id: 3,
    name: 'Study',
    color: '#e69122',
    taskCount: 2,
    progress: 0.4,
  },
];

export const CategorySlider = () => {
  const {colors} = useSelector((state: RootState) => state.theme);

  return (
    <View>
      <Text
        style={{
          paddingHorizontal: SPACING,
          letterSpacing: 1,
          color: colors.secondary,
        }}>
        CATEGORIES
      </Text>
      <FlatList
        data={Category}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <Card containerStyle={{paddingBottom: 10}} style={styles.container}>
              <Text style={{color: colors.secondary, fontSize: 16}}>
                {item.taskCount} tasks
              </Text>
              <Text style={[styles.nameText, {color: colors.text}]}>
                {item.name}
              </Text>
              <ProgressBar
                progress={item.progress}
                height={5}
                borderWidth={0}
                color={item.color}
                unfilledColor="#f2f2f2"
              />
            </Card>
          );
        }}
        contentContainerStyle={{
          paddingRight: width - CARD_WIDTH - SPACING,
          paddingTop: SPACING,
          paddingLeft: SPACING,
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + SPACING}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    padding: SPACING,
    marginRight: SPACING,
    borderRadius: 15,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 15,
  },
});
