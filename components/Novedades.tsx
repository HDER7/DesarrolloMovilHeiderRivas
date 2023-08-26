/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, TextInput ,StyleSheet, Alert} from 'react-native';

const Inca = () => {
    const [inicio, setinicio] = React.useState('');
    const [fin, setfin] = React.useState('');
    const [dif, setDif] = React.useState(0);
    const cal = () => {
        const inicioDate = new Date(inicio);
        const finDate = new Date(fin);
        if (inicioDate <= finDate && inicio !== '' && fin !== '') {
            const diff1 = finDate.getTime() - inicioDate.getTime();
            const diffDias = Math.ceil(diff1 / (1000 * 60 * 60 * 24));
            setDif(diffDias);
        } else {
            Alert.alert('El valor de la fecha inicial debe ser menor o igual al valor de la fecha final');
        }
    };
    return (
        <>
            <Text style={styles.texto}>Incapacidad</Text>
            <TextInput
            placeholder="Fecha inicio"
            value={inicio}
            onChangeText={text => setinicio(text)}
            />
            <TextInput
            placeholder="Fecha fin"
            value={fin}
            onChangeText={text => setfin(text)}
            />
            <Text style={styles.texto}>{dif}</Text>
            <TouchableOpacity style={styles.button} onPress={()=> cal()}>
                <Text style={styles.texb}>Guardar</Text>
            </TouchableOpacity>
        </>
    );
};
const Lice = () =>{
    const [h,seth]:any = React.useState();
    let no = () => {
        if (h >= 9) {
            Alert.alert('Las licencias no pueden ser mayor de 8 horas ');
        }
        else {
            Alert.alert('Guardado');
        }
    };
    return (
        <>
            <Text style={styles.texto}>Licencia</Text>
            <TextInput
                placeholder="Maximo 8 horas"
                value={h}
                onChangeText={text => seth(text)}
            />
            <TouchableOpacity style={styles.button} onPress={()=>no()}>
                <Text style={styles.texb}>Guardar</Text>
            </TouchableOpacity>
        </>
    );
};
const Vaca = () =>{
    const [d,setd]:any = React.useState();
    let no = () => {
        if (d >= 1 && d <= 15 ) {
            Alert.alert('Las vacaciones son minimo 1 dia y maximo 15 dias ');
        }
        else {
            Alert.alert('Guardado');
        }
    };
    return (
        <>
            <Text style={styles.texto}>Vacaciones</Text>
            <TextInput
                placeholder="Maximo 15 dias"
                value={d}
                onChangeText={text => setd(text)}
            />
            <TouchableOpacity style={styles.button} onPress={()=>no()}>
                <Text style={styles.texb}>Guardar</Text>
            </TouchableOpacity>
        </>
    );
};

const Novedades = () => {
    const Components = [Inca, Lice, Vaca];
    const [Index, setIndex] = React.useState(0);
    const Change = Components[Index];
    const cambio = () => {
        setIndex((Index + 1) % Components.length);
    };
    return (
        <View style={styles.container}>
            <Change/>
            <TouchableOpacity style={styles.button} onPress={()=>cambio()}>
                <Text style={styles.texb}>cambio</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        margin: 10,
        backgroundColor: '#22AFF0',
    },
    texb: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Novedades;
