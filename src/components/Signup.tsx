import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {saveUser} from '../../data/Data';

const Signup = ({navigation}: {navigation: any}) => {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const regex =
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  const comp = () => {
    if (regex.test(pass)) {
      saveUser(id, name, user, pass);
      setId('');
      setPass('');
      setUser('');
      setName('');
    } else {
      Alert.alert('recuerde seguir las instrucciones');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.text2}>Cedula</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su Cedula"
        value={id}
        onChangeText={text => setId(text)}
      />
      <Text style={styles.text2}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese un Usuario"
        value={user}
        onChangeText={text => setUser(text)}
      />
      <Text style={styles.text2}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su Nombre"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.text2}>Contraseña</Text>
      <Text style={styles.text3}>
        La contraseña tiene las siguientes características: Debe contener 8
        caracteres Una letra en mayúscula Una letra en minúscula Un numero Un
        carácter especial
      </Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Ingrese una Contraseña"
        value={pass}
        onChangeText={text => setPass(text)}
      />
      <TouchableOpacity onPress={() => comp()} style={styles.button}>
        <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.log}>Iniciar Sesion</Text>
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
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFF',
    bottom: 60,
  },
  text3: {
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 19,
  },
  login: {
    marginTop: 30,
  },
  log: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default Signup;
