import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';

interface Props {
  children: any;
  containerStyle?: ViewStyle | undefined;
  style?: ViewStyle | undefined;
}

export const Card: React.FC<Props> = ({children, containerStyle, style}) => {
  const {colors} = useSelector((state: RootState) => state.theme);

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.wrapper,
          style,
          {backgroundColor: colors.card, shadowColor: colors.cardShadow},
        ]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  wrapper: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
});
