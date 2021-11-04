import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

const buttonSize = Dimensions.get('screen').width / 7;

interface Props {
  onPress?: () => void;
}

export const FloatingButton: React.FC<Props> = ({onPress}) => {
  const {colors} = useSelector((state: RootState) => state.theme);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[
          styles.wrapper,
          {backgroundColor: colors.primary, shadowColor: colors.primary},
        ]}
        onPress={onPress}>
        <FeatherIcon name="plus" size={buttonSize / 2} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '1%',
    right: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: buttonSize,
    height: buttonSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: buttonSize / 2,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
  },
});
