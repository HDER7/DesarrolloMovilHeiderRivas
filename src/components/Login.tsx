import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {searchUser} from '../../data/Data';

const Login = ({navigation}: {navigation: any}) => {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const authenticate = () => {
    if (searchUser(user, pass)) {
      navigation.navigate('Profile', {name: user});
    } else {
      Alert.alert('El usuario no existe, Registrese');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/anfer/OneDrive/Escritorio/6 Semestre/Desarrollo movil/trabajadores_mina/img/1576640.png')}
        style={styles.img}
      />
      <Text style={styles.text2}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={user}
        onChangeText={text => setUser(text)}
      />
      <Text style={styles.text2}>Contraseña</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Contraseña"
        value={pass}
        onChangeText={text => setPass(text)}
      />
      <TouchableOpacity onPress={() => authenticate()} style={styles.button}>
        <Text style={styles.text}>Iniciar Sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.register}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.rt}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0834A9',
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    width: 400,
    borderRadius: 20,
    margin: 10,
    paddingLeft: 35,
    fontSize: 18,
    borderColor: '#999',
    borderWidth: 1,
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: 'black',
    top: 10,
  },
  text: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  img: {
    width: 206,
    height: 208,
  },
  register: {
    marginTop: 30,
  },
  rt: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default Login;
