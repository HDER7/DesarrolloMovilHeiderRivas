/* eslint-disable prettier/prettier */
import moment from 'moment';
import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { GHora } from '../data/data';

const Rhoras = () => {
    const [fecha, setDate] = React.useState(new Date());
    const [h, seth] = React.useState(new Date());
    const [ch, setch] = React.useState(0);
    const [forma, setforma] = React.useState('AM');
    const Time = moment().format('LT').slice(0,-2);
    const togformat = () => {
        setforma(forma === 'AM' ? 'PM' : 'AM');
    };
    const cal = () => {
        const time1 = new Date(fecha).getTime();
        const time2 = new Date(h).getTime();
        const ti = Math.abs(time2 - time1);
        const ti2 = Math.round(ti / (1000 * 60 * 60));
        setch(ti2);
        GHora(fecha,(Time + forma),h,ti2);
    };
    return (
        <View style={styles.container}>
            <DatePicker
                open={true}
                mode="date"
                date={fecha}
                onDateChange={setDate}
            />
            <Text style={styles.text}>{Time} {forma}</Text>
            <TouchableOpacity onPress={togformat} style={styles.toggleButton}>
                <Text style={styles.toggleButtonText}>
                    {forma === 'AM' ? 'Switch to PM' : 'Switch to AM'}
                </Text>
            </TouchableOpacity>
            <DatePicker
                open={true}
                mode="time"
                date={h}
                onDateChange={seth}
            />
            <Text style={styles.text}>Hora trabajadas: {ch}</Text>
            <TouchableOpacity onPress={()=>cal()}>
                <Text style={styles.button}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ingreso: {
        backgroundColor: '#FFF',
        color: '#000',
        width: 100,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 35,
        fontSize: 18,
        borderColor: '#999',
        borderWidth: 1,
    },
    text: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    toggleButton: {
        marginTop: 20,
        backgroundColor: '#007AFF',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
    },
        toggleButtonText: {
        color: 'white',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
});

export default Rhoras;
