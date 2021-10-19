import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
// import {AuthContext} from '../../contexts/authContext';
import Button from '../../components/Button/Button';
import {useSelector, useDispatch} from 'react-redux';
import {logout, selectAuth} from '../../store/features/authSlice';

const Home = () => {
  // const {user, logout} = React.useContext(AuthContext);
  const user = useSelector(selectAuth);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.subContainers}>
        <Text style={styles.title}>
          Você está autenticada como: {user.name}
        </Text>
      </View>
      <View style={styles.subContainers}>
        <Button
          title="Logout"
          // onPress={logout}
          onPress={() => dispatch(logout())}
          buttonStyle={styles.buttonLogout}
        />
      </View>
    </View>
  );
};

export default Home;
