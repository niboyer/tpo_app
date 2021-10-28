import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './Pantallas/MainScreen';
import ElegirLogin from './Pantallas/ElegirLogin';
import LoginVecino from './Pantallas/LoginVecino';
import LoginInspector from './Pantallas/LoginInspector';
import DatosCrear from './Pantallas/DatosCrear';
import PantallaDatos from './Pantallas/PantallaDatos';
import HomeVecino from './Pantallas/HomeVecino';
import HomeInspector from './Pantallas/HomeInspector';
import HomeInvitado from './Pantallas/HomeInvitado';
import OlvidoVecino from './Pantallas/OlvidoVecino';
import OlvidoInspector from './Pantallas/OlvidoInspector';
import PregVecino from './Pantallas/PregVecino';
import PregInspector from './Pantallas/PregInspector';
import ReestablecerPassVecino from './Pantallas/ReestablecerPassVecino';
import ReestablecerPassInsp from './Pantallas/ReestablecerPassInsp';
import PublicacionComercio from './Pantallas/Promociones/PublicacionComercio';
import PublicacionServicio from './Pantallas/Promociones/PublicacionServicio';
import ListaComercios from './Pantallas/Promociones/ListaComercios';
import ComercioDatos from './Pantallas/Promociones/ComercioDatos';
import ListaServicios from './Pantallas/Promociones/ListaServicios';
import ServicioDatos from './Pantallas/Promociones/ServicioDatos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ElegirLogin" component={ElegirLogin} />
        <Stack.Screen name="LoginVecino" component={LoginVecino} />
        <Stack.Screen name="OlvidoVecino" component={OlvidoVecino}/>
        <Stack.Screen name="PregVecino" component={PregVecino}/>
        <Stack.Screen name="ReestablecerPassVecino" component={ReestablecerPassVecino}/>
        <Stack.Screen name="HomeVecino" component={HomeVecino} />
        <Stack.Screen name="LoginInspector" component={LoginInspector} />
        <Stack.Screen name="OlvidoInspector" component={OlvidoInspector}/>
        <Stack.Screen name="PregInspector" component={PregInspector}/>
        <Stack.Screen name="ReestablecerPassInsp" component={ReestablecerPassInsp}/>
        <Stack.Screen name="HomeInspector" component={HomeInspector} />
        <Stack.Screen name="DatosCrear" component={DatosCrear} />
        <Stack.Screen name="PantallaDatos" component={PantallaDatos}/>
        <Stack.Screen name="HomeInvitado" component={HomeInvitado}/>
        <Stack.Screen name="PublicacionComercio" component={PublicacionComercio}/>
        <Stack.Screen name="PublicacionServicio" component={PublicacionServicio}/>
        <Stack.Screen name="ListaComercios" component={ListaComercios}/>
        <Stack.Screen name="ComercioDatos" component={ComercioDatos}/>
        <Stack.Screen name="ListaServicios" component={ListaServicios}/>
        <Stack.Screen name="ServicioDatos" component={ServicioDatos}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
