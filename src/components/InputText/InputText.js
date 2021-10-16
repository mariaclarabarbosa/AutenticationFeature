import React from 'react';
import {TextInput, View} from 'react-native';
import {subTextColor} from '../../helpers/colors';
import styles from './styles';

const InputText = ({value, onChangeText, placeHolder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        placeholderTextColor={subTextColor}
        style={styles.input}
      />
    </View>
  );
};

export default InputText;
