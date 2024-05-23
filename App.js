import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Squirtle from "./screens/Squirtle.js";
import Wartortle from "./screens/Wartortle.js";
import Blastoise from "./screens/Blastoise.js";
import ToDoList from "./screens/ToDoList.js";
import LoginScreen from "./screens/LoginScreen.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackDoSquirtle() {
  return (
    <Stack.Navigator initialRouteName="Squirtle">
      <Stack.Screen name="Squirtle" component={Squirtle} />
      <Stack.Screen name="Wartortle" component={Wartortle} />
      <Stack.Screen name="Blastoise" component={Blastoise} />
    </Stack.Navigator>
  );
}

const getEstaLogado = async () => {
  const credenciais = await AsyncStorage.getItem('credenciais');
  return credenciais !== null;
};

function StackDoToDoList() {
  const [estaLogado, setEstaLogado] = useState(null);

  useEffect(() => {
    const verificarCredenciais = async () => {
      const logado = await getEstaLogado();
      setEstaLogado(logado);
    };

    verificarCredenciais();
  }, []);

  if (estaLogado === null) {
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      {estaLogado ? (
        <>
          <Stack.Screen name="ToDoList" component={ToDoList} />
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
            headerShown: false
          }} />
        </>
      )}
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Squirtle" component={StackDoSquirtle} options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />
        }} />
        <Tab.Screen name="To Do List" component={StackDoToDoList} options={{
          headerShown: false,
          tabBarIcon: () => <AntDesign name="form" size={24} color="black" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}