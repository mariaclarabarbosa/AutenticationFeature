import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import InputText from '../../components/InputText/InputText';
import Button from '../../components/Button/Button';
import styles from './styles';
import {primaryColor} from '../../helpers/colors';
import requestSignIn from '../../services/auth';
import {AuthContext} from '../../contexts/authContext';

const SignIn = () => {
  const [emailPhoneNumber, setEmailPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loginLoading, setLoginLoading] = React.useState(false);
  const {setUser} = React.useContext(AuthContext);

  const handleSignIn = async () => {
    setLoginLoading(true);
    const response = await requestSignIn();
    setLoginLoading(false);
    setUser(response.user);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>Please enter your account here</Text>
      </View>
      <View style={styles.inputsContainer}>
        <InputText
          placeHolder="E-mail or phone number"
          value={emailPhoneNumber}
          onChangeText={setEmailPhoneNumber}
        />
        <InputText
          placeHolder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={handleSignIn} loading={loginLoading} />
        <Text style={styles.subTitle}>Or continue with</Text>
        <Button title="Google" buttonStyle={styles.googleButton} />
        <View style={styles.signUpView}>
          <Text style={styles.text}>Don’t have any account?</Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={[styles.text, {color: primaryColor}]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
