import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';

interface Props {
  children: any;
  containerStyle?: ViewStyle | undefined;
  style?: ViewStyle | undefined;
}

export const Card: React.FC<Props> = ({children, containerStyle, style}) => {
  const theme = useSelector((state: any) => state.theme);

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={[styles.wrapper, style, {backgroundColor: theme.colors.card}]}>
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
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowColor: '#a3bbc4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },
});
