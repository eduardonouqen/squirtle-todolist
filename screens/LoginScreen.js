import React from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default LoginScreen = () => {

    const [login, setLogin] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const salvarCredenciais = async () => {
        try {
            const credenciais = [login, senha];
            await AsyncStorage.setItem('credenciais', JSON.stringify(credenciais));
            setLogin('');
            setSenha('');
        } catch (error) {
            console.error('Erro ao salvar credenciais:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoMaior}>Login</Text>
            <TextInput style={styles.caixaTexto} onChangeText={setLogin} placeholder='Usuário' value={login} />
            <TextInput style={styles.caixaTexto} onChangeText={setSenha} secureTextEntry={true} placeholder='Senha' value={senha} />
            <TouchableOpacity
                style={styles.botaoLogin}
                onPress={() => {
                    salvarCredenciais();
                }}>
                <Text style={styles.logarTexto}>Logar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textoMaior: {
        color: '#545454',
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10,
    },
    caixaTexto: {
        borderColor: '#dbdbdb',
        borderWidth: 1,
        marginTop: 15,
        borderRadius: 20,
        padding: 10,
        width: "80%",
    },
    botaoLogin: {
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#2097f3',
        marginTop: 15,
        borderRadius: 20,
        padding: 10,
        width: '80%',
    },
    logarTexto: {
        color: 'white',
        fontWeight: '500',
    },
});