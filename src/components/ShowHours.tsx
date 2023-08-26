/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,View,FlatList, TextInput, Text, TouchableOpacity} from 'react-native';
import {hours} from '../../data/Data';

type HoursItem = {
    date: Date;
    hStart: string;
    hEnd: string;
    total: string;
};

const ShowHours = () => {
    const [start, setStart] = React.useState('');
    const [end, setEnd] = React.useState('');
    const [filtering, setFiltering] = React.useState<HoursItem[]>([]);

    const filter = () => {
        const filtered = hours.filter((item: HoursItem) => {
            const itemDate = new Date(item.date);
            const startDate = new Date(start);
            const endDate = new Date(end);
            itemDate.setHours(0);
            endDate.setHours(1);
            return itemDate >= startDate && itemDate < endDate;
        });
        setFiltering(filtered);
    };
    return (
        <View style={styles.container}>
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
            <TouchableOpacity onPress={()=>filter()} style={styles.button}>
                <Text>Filtrar</Text>
            </TouchableOpacity>
            <FlatList
                data={filtering}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                <View style={styles.item}>
                    <Text style={styles.title}>Fecha:{item.date.toString()}</Text>
                    <Text style={styles.title}>Hora inicio: {item.hStart}</Text>
                    <Text style={styles.title}>Hora Final: {item.hEnd}</Text>
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

export default ShowHours;
