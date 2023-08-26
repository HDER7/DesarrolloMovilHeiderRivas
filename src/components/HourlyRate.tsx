/* eslint-disable prettier/prettier */
import moment from 'moment';
import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { saveHour } from '../../data/Data';

const HourlyRate = () => {
    const [date, setDate] = React.useState(new Date());
    const [hour, setHour] = React.useState(new Date());
    const [hours, setHours] = React.useState(0);
    const [format, setFormat] = React.useState('AM');
    const Time = moment().format('LT');
    const togFormat = () => {
        setFormat(format === 'AM' ? 'PM' : 'AM');
    };
    const save = () => {
        const time1 = new Date(date).getTime();
        const time2 = new Date(hour).getTime();
        const ti = Math.abs(time2 - time1);
        const ti2 = Math.round(ti / (1000 * 60 * 60));
        setHours(ti2);
        saveHour(date,(Time + format),(moment(hour).format('LT')),ti2);
    };
    return (
        <View style={styles.container}>
            <DatePicker
                open={true}
                mode="date"
                date={date}
                onDateChange={setDate}
            />
            <Text style={styles.text}>{Time} {format}</Text>
            <TouchableOpacity onPress={togFormat} style={styles.toggleButton}>
                <Text style={styles.toggleButtonText}>
                    {format === 'AM' ? 'Switch to PM' : 'Switch to AM'}
                </Text>
            </TouchableOpacity>
            <DatePicker
                open={true}
                mode="time"
                date={date}
                onDateChange={setHour}
            />
            <Text style={styles.text}>Hora trabajadas: {hours}</Text>
            <TouchableOpacity onPress={()=>save()}>
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

export default HourlyRate;
