/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, TouchableOpacity, Modal, View, StyleSheet,Image} from 'react-native';
import HourlyRate from './HourlyRate';
import ShowHours from './ShowHours';
import News from './News';

const Profile = ({route}: any) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);
    const open = (content:any) => {
        setModalContent(content);
        setModalVisible(true);
    };
    const close = () => {
        setModalVisible(false);
    };
    // eslint-disable-next-line react/no-unstable-nested-components
    const Comp = ({ content, onClose }: any) => {
        return (
            <Modal visible={modalVisible} onRequestClose={onClose}>
                <View style={styles.centeredView}>
                    {content}
                    <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
                        <Text style={styles.textStyle} >Salir</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    };

    const DATA = [
        { title: 'Registro Horas', comp: <HourlyRate/>},
        { title: 'Consulta Horas', comp: <ShowHours/> },
        { title: 'Novedades', comp: <News/> },
    ];

    return (
        <>
            <View style={styles.profile}>
                <Image source={require('C:/Users/anfer/OneDrive/Escritorio/6 Semestre/Desarrollo movil/trabajadores_mina/img/9187604.png')} style={styles.img}/>
                <Text style={styles.name}>{route.params.name}</Text>
            </View>
            <FlatList style={styles.container}
            data={DATA}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => open(item.comp)}>
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )}
            />
            {modalVisible && <Comp content={modalContent} onClose={close} />}
        </>
);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#2AA5F7',
        padding: 30,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 20,
    },
    title: {
        fontSize: 32,
        color: '#000',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        margin: 50,
        padding: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    name: {
        fontSize: 40,
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 25,
    },
    img: {
        left: 10,
        width: 88,
        height: 88,
        marginTop: 10,
    },
    profile: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
},);

export default Profile;
