import {StyleSheet} from 'react-native';
import {backgroundColor, primaryColor} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    marginVertical: 8,
    backgroundColor: primaryColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: backgroundColor,
  },
});

export default styles;
