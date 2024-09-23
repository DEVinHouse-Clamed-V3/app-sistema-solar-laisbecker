import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useState } from 'react';

export function Planet({ planeta }) {

    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.cardStyle}>
            <View style={styles.cardPlaneta}>
                <Text style={styles.textStyle}>{planeta.nome}</Text>
                <Image style={styles.imagemCard} source={{ uri: planeta.img }} />
            </View>
            <View style={styles.infoCard}>
                <View style={styles.rowStyle}>
                    <Text style={styles.textCard}>Velocidade Orbital Média</Text>
                    <Text style={styles.resultCard}>{planeta.velocidadeOrbitalMediaKmS}</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textCard}>Quantidade de Satélites</Text>
                    <Text style={styles.resultCard}>{planeta.quantidadeSatelites}</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textCard}>Área da Superfície</Text>
                    <Text style={styles.resultCard}>{planeta.areaSuperficieKm2}</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.textCard}>Periodo de Rotação em Dias</Text>
                    <Text style={styles.resultCard}>{planeta.periodoRotacaoDias}</Text>
                </View>
                <View style={styles.buttonAlign}>
                    <TouchableOpacity style={styles.buttonDetails} onPress={() => setModalVisible(true)}>
                        <Text style={styles.buttonText}>Quer saber mais sobre {planeta.nome}?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)} // Fecha o modal ao pressionar o botão Fechar
            >
                <SafeAreaView style={styles.modalAlign}>
                    <View style={styles.modalStyle}>
                        <View>
                            <Text style={styles.modalTextStyle}>{planeta.nome}: {planeta.descricaoBreve}</Text>
                        </View>
                        <View>
                            <Text style={styles.modalTextStyle}>{planeta.descricao}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.buttonFechar}
                            onPress={() => setModalVisible(false)} // Fecha o modal
                        >
                            <Text style={styles.buttonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: '#000000cc',
        borderRadius: 30,
        width: '100%',
        paddingTop: 20,
        marginBottom: 30
    },
    cardPlaneta: {
        alignItems: 'center'
    },
    infoCard: {
        padding: 30,
        gap: 15
    },
    textCard: {
        fontSize: 18,
        color: '#9b9b9b'
    },
    textStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        paddingBottom: 15
    },
    resultCard: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: '500'
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagemCard: {
        width: 250,
        height: 250
    },
    buttonDetails: {
        backgroundColor: '#000000',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: '80%',
        padding: 15,
        alignItems: 'center',
        marginTop: 15
    },
    modalStyle: {
        backgroundColor: '#0082aa',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    modalAlign: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttonText: {
        color: '#fff',
        fontWeight: "500",
    },
    modalTextStyle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'justify'
    },
    buttonAlign: {
        alignItems: 'center'
    },
    buttonFechar: {
        alignItems: 'center',
        width: 100,
        backgroundColor: '#00c3ffa6',
        padding: 10,
        borderRadius: 10
    }
});