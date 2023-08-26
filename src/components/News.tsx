/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, TextInput ,StyleSheet, Alert} from 'react-native';

const Inability = () => {
    const [start, setStart] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [diff, setDif] = React.useState(0);
    const Authentication = () => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        if (startDate <= endDate && start !== '' && end !== '') {
            const diff1 = endDate.getTime() - startDate.getTime();
            const diffDays = Math.ceil(diff1 / (1000 * 60 * 60 * 24));
            setDif(diffDays);
        } else {
            Alert.alert('El valor de la fecha inicial debe ser menor o igual al valor de la fecha final');
        }
    };
    return (
        <>
            <Text style={styles.text3}>Incapacidad</Text>
            <TextInput
            placeholder="Fecha inicio"
            value={start}
            onChangeText={text => setStart(text)}
            />
            <TextInput
            placeholder="Fecha fin"
            value={end}
            onChangeText={text => setEnd(text)}
            />
            <Text style={styles.text3}>{diff}</Text>
            <TouchableOpacity style={styles.button} onPress={()=> Authentication()}>
                <Text style={styles.text2}>Guardar</Text>
            </TouchableOpacity>
        </>
    );
};
const License = () =>{
    const [hour,setHour]:any = React.useState();
    let Authentication = () => {
        if (hour >= 9) {
            Alert.alert('Las licencias no pueden ser mayor de 8 horas ');
        }
        else {
            Alert.alert('Guardado');
        }
    };
    return (
        <>
            <Text style={styles.text3}>Licencia</Text>
            <TextInput
                placeholder="Maximo 8 horas"
                value={hour}
                onChangeText={text => setHour(text)}
            />
            <TouchableOpacity style={styles.button} onPress={()=>Authentication()}>
                <Text style={styles.text2}>Guardar</Text>
            </TouchableOpacity>
        </>
    );
};
const Vacation = () =>{
    const [days,setDays]:any = React.useState();
    let Authentication = () => {
        let day = parseInt(days,10);
        if (day >= 1 && day <= 15 ) {
            Alert.alert('Guardado');
        }
        else {
            Alert.alert('Las vacaciones son minimo 1 dia y maximo 15 dias ');
        }
    };
    return (
        <>
            <Text style={styles.text3}>Vacaciones</Text>
            <TextInput
                placeholder="Maximo 15 dias"
                value={days}
                onChangeText={text => setDays(text)}
            />
            <TouchableOpacity style={styles.button} onPress={()=>Authentication()}>
                <Text style={styles.text2}>Guardar</Text>
            </TouchableOpacity>
        </>
    );
};

const News = () => {
    const Components = [Inability, License, Vacation];
    const [Index, setIndex] = React.useState(0);
    const Change = Components[Index];
    const changeTo = () => {
        setIndex((Index + 1) % Components.length);
    };
    return (
        <View style={styles.container}>
            <Change/>
            <TouchableOpacity style={styles.button} onPress={()=>changeTo()}>
                <Text style={styles.text2}>cambio</Text>
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
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    text3: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default News;
