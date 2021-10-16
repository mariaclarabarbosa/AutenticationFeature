import {StyleSheet} from 'react-native';
import {cancelButtonColor, textColor} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  subContainers: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: textColor,
    marginBottom: 8,
  },
  buttonLogout: {
    backgroundColor: cancelButtonColor,
  },
});

export default styles;
