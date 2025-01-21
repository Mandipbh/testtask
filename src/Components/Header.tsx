import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ColorsData} from '../theme/colors';

type Props = {
  progress: number;
};

const Header = (props: Props) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.progressbar}>
        <View style={[styles.progress, {width: props.progress}]} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 40,
    justifyContent: 'center',
  },
  progressbar: {
    height: 6,
    width: '100%',
    backgroundColor: ColorsData.lightgray,
    borderRadius: 10,
  },
  progress: {
    height: 6,
    width: '50%',
    backgroundColor: ColorsData.primary,
    borderRadius: 10,
  },
});
