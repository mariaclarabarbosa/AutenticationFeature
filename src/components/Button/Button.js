import React from 'react';
import {Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import styles from './styles';
import {backgroundColor} from '../../helpers/colors';

const Button = ({title, onPress, buttonStyle, loading}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, buttonStyle]}
      activeOpacity={0.5}>
      {loading ? (
        <ActivityIndicator color={backgroundColor} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
