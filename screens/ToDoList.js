import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, Modal, View, Animated, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default ToDoList = ({ navigation }) => {

  const [texto, setTexto] = React.useState('');
  const [value, setValue] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const salvarTexto = async () => {
    try {
      const lista = [...value, texto];
      await AsyncStorage.setItem('salvadoPae', JSON.stringify(lista));
      setValue(lista);
      setTexto('');
    } catch (error) {
      console.error('Erro ao salvar item:', error);
    }
  };

  async function mostrarTexto() {
    const response = await AsyncStorage.getItem('salvadoPae');
    const parsedItem = JSON.parse(response)

    if (parsedItem) {
      setValue(parsedItem)
    }
  }

  useEffect(() => {
    mostrarTexto();

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10, padding: 15 }} onPress={() => setModalVisible(true)}>
          <AntDesign name="pluscircle" size={24} color="darkseagreen" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderRightActions = (dragX, index) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0, 100, 101],
      outputRange: [1, 0, 0, 1],
    });

    return (
      <TouchableOpacity style={styles.swapEfeito} onPress={() => deletarItem(index)}>
        <Animated.View style={{ transform: [{ translateX: trans }] }}>
          <View style={{ padding: 10 }}>
            <FontAwesome name="trash-o" size={24} color="black" />
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  function deletarItem(index) {
    const posicaoItem = value.filter((_, i) => i !== index);
    setValue(posicaoItem);
    AsyncStorage.setItem('salvadoPae', JSON.stringify(posicaoItem));
  }

  return (
    <ScrollView>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.viewX}>
                <Text style={styles.modalText}>Descreva a tarefa</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <TextInput style={styles.caixaTexto} onChangeText={setTexto} placeholder="Descrição" value={texto} multiline="true" numberOfLines={3} />
              <TouchableOpacity
                style={styles.botaoSalvar}
                onPress={() => {
                  salvarTexto();
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.salvarTexto}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <Text style={styles.textoDefault}>Suas tarefas vão aparecer aqui:</Text>
      {Array.isArray(value) && value.map((item, index) => (
        <Swipeable renderRightActions={(dragX) => renderRightActions(dragX, index)} key={item}>
          <View style={styles.itemArray}>
            <Text style={styles.textoOutput}> {item} </Text>
          </View>
        </Swipeable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  caixaTexto: {
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  textoDefault: {
    textAlign: 'center',
    paddingTop: 30,
  },
  textoOutput: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemArray: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  botaoSalvar: {
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#0095ee',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  salvarTexto: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalText: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 12,
  },
  viewX: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 12
  },
  swapEfeito: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightcoral',
    borderRadius: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
  }
});