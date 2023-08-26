import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {saveUser} from '../data/data';

const Signup = ({navigation}: {navigation: any}) => {
  const [user, setuser] = React.useState('');
  const [pass, setpass] = React.useState('');
  const [id, setid] = React.useState('');
  const [name, setname] = React.useState('');
  const regex =
    /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
  const comp = () => {
    setid('');
    setid('');
    setid('');
    if (regex.test(pass)) {
      saveUser(id, name, user, pass);
      setid('');
      setpass('');
      setuser('');
      setname('');
    } else {
      Alert.alert('recuerde seguir las instrucciones');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <Text style={styles.texto}>Cedula</Text>
      <TextInput
        style={styles.ingreso}
        placeholder="Ingrese su Cedula"
        value={id}
        onChangeText={text => setid(text)}
      />
      <Text style={styles.texto}>Usuario</Text>
      <TextInput
        style={styles.ingreso}
        placeholder="Ingrese un Usuario"
        value={user}
        onChangeText={text => setuser(text)}
      />
      <Text style={styles.texto}>Nombre</Text>
      <TextInput
        style={styles.ingreso}
        placeholder="Ingrese su Nombre"
        value={name}
        onChangeText={text => setname(text)}
      />
      <Text style={styles.texto}>Contraseña</Text>
      <Text style={styles.textcon}>
        La contraseña tiene las siguientes características: Debe contener 8
        caracteres Una letra en mayúscula Una letra en minúscula Un numero Un
        carácter especial
      </Text>
      <TextInput
        secureTextEntry={true}
        style={styles.ingreso}
        placeholder="Ingrese una Contraseña"
        value={pass}
        onChangeText={text => setpass(text)}
      />
      <TouchableOpacity onPress={() => comp()} style={styles.boton}>
        <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.inicio}
        onPress={() => navigation.navigate('Inicio')}>
        <Text style={styles.inite}>Iniciar Sesion</Text>
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
  ingreso: {
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
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  boton: {
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
  textcon: {
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 19,
  },
  inicio: {
    marginTop: 30,
  },
  inite: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default Signup;
