import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ColorsData} from '../theme/colors';

type CustomButtonProps = {
  isTextButton?: boolean;
  title?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  isTextButton = false,
  title,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, isTextButton && styles.textButton]}>
      <Text
        style={[
          styles.text,
          isTextButton && {
            borderBottomWidth: 1,
            borderColor: ColorsData.primary,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorsData.secondary,
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 5,
  },
  textButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    letterSpacing: 1,
  },
});
