import {StyleSheet} from 'react-native';
import {
  backgroundColor,
  textColor,
  subTextColor,
  cancelButtonColor,
} from '../../helpers/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: 24,
  },
  headerContainer: {
    flex: 0.3,
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
  subTitle: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    color: subTextColor,
    marginVertical: 8,
  },
  inputsContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordButton: {
    padding: 5,
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: textColor,
  },
  buttonsContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: cancelButtonColor,
  },
  signUpView: {
    flexDirection: 'row',
  },
  signUpButton: {
    paddingHorizontal: 10,
  },
});

export default styles;
