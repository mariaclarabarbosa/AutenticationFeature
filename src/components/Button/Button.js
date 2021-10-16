import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({title, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
