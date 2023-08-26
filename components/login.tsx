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
import {buscaUser} from '../data/data';

const Login = ({navigation}: {navigation: any}) => {
  const [user, setuser] = React.useState('');
  const [pass, setpass] = React.useState('');
  const comp = () => {
    if (buscaUser(user, pass)) {
      navigation.navigate('Page', {nombre: user});
    } else {
      Alert.alert('El usuario no existe, Registrese');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/anfer/OneDrive/Escritorio/6 Semestre/Desarrollo movil/trabajadores_mina/img/1576640.png')}
        style={styles.imagen}
      />
      <Text style={styles.texto}>Usuario</Text>
      <TextInput
        style={styles.ingreso}
        placeholder="Usuario"
        value={user}
        onChangeText={text => setuser(text)}
      />
      <Text style={styles.texto}>Contraseña</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.ingreso}
        placeholder="Contraseña"
        value={pass}
        onChangeText={text => setpass(text)}
      />
      <TouchableOpacity onPress={() => comp()} style={styles.boton}>
        <Text style={styles.text}>Iniciar Sesion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registrar}
        onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.regtext}>Registrarse</Text>
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
  imagen: {
    width: 206,
    height: 208,
  },
  registrar: {
    marginTop: 30,
  },
  regtext: {
    fontSize: 20,
    color: '#FFF',
  },
});

export default Login;
