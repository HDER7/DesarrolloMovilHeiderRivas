/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, TouchableOpacity, Modal, View, StyleSheet,Image} from 'react-native';
import Rhoras from './Rhoras';
import Mhoras from './Mhoras';
import Novedades from './Novedades';

const Page = ({route}: any) => {
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
                    <TouchableOpacity onPress={onClose}>
                        <Text style={styles.buttonClose}>Salir</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    };

    const DATA = [
        { title: 'Registro Horas', comp: <Rhoras/>},
        { title: 'Consulta Horas', comp: <Mhoras/> },
        { title: 'Novedades', comp: <Novedades/> },
    ];

    return (
        <>
            <View style={styles.profile}>
                <Image source={require('C:/Users/anfer/OneDrive/Escritorio/6 Semestre/Desarrollo movil/trabajadores_mina/img/9187604.png')} style={styles.imagen}/>
                <Text style={styles.nom}>{route.params.nombre}</Text>
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
    nom: {
        fontSize: 40,
        color:'#000',
        fontWeight: 'bold',
        marginLeft: 25,
    },
    imagen: {
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

export default Page;
