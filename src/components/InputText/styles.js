import {StyleSheet} from 'react-native';
import {borderColor, textColor} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    marginVertical: 8,
    borderColor: borderColor,
    borderRadius: 30,
    borderWidth: 1,
  },
  input: {
    color: textColor,
    height: '100%',
    paddingHorizontal: 15,
    width: '100%',
  },
});

export default styles;
