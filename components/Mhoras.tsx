/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,View,FlatList, TextInput, Text, TouchableOpacity} from 'react-native';
import {horas} from '../data/data';

type HorasItem = {
    fecha: string;
    horai: string;
    horaf: string;
    total: string;
};

const Mhoras = () => {
    const [inicio, setinicio] = React.useState('');
    const [fin, setfin] = React.useState('');
    const [filtrado, setfiltrado] = React.useState<HorasItem[]>([]);

    const filtro = () => {
        const filtered = horas.filter((item) => {
            return (new Date(item.fecha) >= new Date(inicio) && new Date(item.fecha) <= new Date(fin));
        });
        setfiltrado(filtered);
    };
    return (
        <View style={styles.container}>
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
            <TouchableOpacity onPress={filtro} style={styles.button}>
                <Text>Filtrar</Text>
            </TouchableOpacity>
            <FlatList
                data={filtrado}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                <View style={styles.item}>
                    <Text style={styles.title}>Fecha {item.fecha}</Text>
                    <Text style={styles.title}>Hora inicio: {item.horai}</Text>
                    <Text style={styles.title}>Hora Final: {item.horaf}</Text>
                    <Text style={styles.title}>Horas trabajadas: {item.total}</Text>
                </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#FA5355',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
});

export default Mhoras;
