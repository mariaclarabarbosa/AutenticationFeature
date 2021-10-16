import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../contexts/authContext';
import Button from '../../components/Button/Button';

const Home = () => {
  const {user, logout} = React.useContext(AuthContext);
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
          onPress={logout}
          buttonStyle={styles.buttonLogout}
        />
      </View>
    </View>
  );
};

export default Home;
