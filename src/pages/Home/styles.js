import {StyleSheet} from 'react-native';
import {textColor} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: textColor,
    marginBottom: 8,
  },
});

export default styles;
