import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './Pantallas/MainScreen';
import ElegirLogin from './Pantallas/Login/ElegirLogin';
import VerificarDNI from './Pantallas/Login/VerificarDNI';
import CrearClave from './Pantallas/Creacion vecino/CrearClave';
import LoginVecino from './Pantallas/Login/LoginVecino';
import LoginInspector from './Pantallas/Login/LoginInspector';
import DatosCrear from './Pantallas/Creacion vecino/DatosCrear';
import PantallaDatos from './Pantallas/Creacion vecino/PantallaDatos';
import HomeVecino from './Pantallas/Home/HomeVecino';
import HomeInspector from './Pantallas/Home/HomeInspector';
import HomeInvitado from './Pantallas/Home/HomeInvitado';
import OlvidoVecino from './Pantallas/Olvido vecino/OlvidoVecino';
import OlvidoInspector from './Pantallas/Olvido inspector/OlvidoInspector';
import PregVecino from './Pantallas/Olvido vecino/PregVecino';
import PregInspector from './Pantallas/Olvido inspector/PregInspector';
import ReestablecerPassVecino from './Pantallas/Olvido vecino/ReestablecerPassVecino';
import ReestablecerPassInsp from './Pantallas/Olvido inspector/ReestablecerPassInsp';
import PublicacionComercio from './Pantallas/Promociones/PublicacionComercio';
import PublicacionServicio from './Pantallas/Promociones/PublicacionServicio';
import ListaComercios from './Pantallas/Promociones/ListaComercios';
import ComercioDatos from './Pantallas/Promociones/ComercioDatos';
import ListaServicios from './Pantallas/Promociones/ListaServicios';
import ServicioDatos from './Pantallas/Promociones/ServicioDatos';
import GenerarReclamo from './Pantallas/Reclamos/GenerarReclamo';
import EnviarRed from './Pantallas/Reclamos/EnviarRed';
import DevolucionNro from './Pantallas/Reclamos/DevolucionNro';
import GuardadoLocal from './Pantallas/Reclamos/GuardadoLocal';
import ListaReclamos from './Pantallas/Reclamos/ListaReclamos';
import ReclamoIndividual from './Pantallas/Reclamos/ReclamoIndividual';
import GenerarDenuncia from './Pantallas/Denuncias/GenerarDenuncia';
import GenerarDenunciaComercio from './Pantallas/Denuncias/GenerarDenunciaComercio';
import GenerarDenunciaVecino from './Pantallas/Denuncias/GenerarDenunciaVecino';
import DeclaracionJurada from './Pantallas/Denuncias/DeclaracionJurada';
import DevolucionNroDenuncia from './Pantallas/Denuncias/DevolucionNroDenuncia';
import ListaDenuncias from './Pantallas/Denuncias/ListaDenuncias';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ElegirLogin" component={ElegirLogin} />
        <Stack.Screen name="VerificarDNI" component={VerificarDNI} />
        <Stack.Screen name="CrearClave" component={CrearClave} />
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
        <Stack.Screen name="GenerarReclamo" component={GenerarReclamo}/>
        <Stack.Screen name="EnviarRed" component={EnviarRed}/>
        <Stack.Screen name="DevolucionNro" component={DevolucionNro}/>
        <Stack.Screen name="GuardadoLocal" component={GuardadoLocal}/>
        <Stack.Screen name="ListaReclamos" component={ListaReclamos}/>
        <Stack.Screen name="ReclamoIndividual" component={ReclamoIndividual}/>
        <Stack.Screen name="GenerarDenuncia" component={GenerarDenuncia}/>
        <Stack.Screen name="GenerarDenunciaComercio" component={GenerarDenunciaComercio}/>
        <Stack.Screen name="GenerarDenunciaVecino" component={GenerarDenunciaVecino}/>
        <Stack.Screen name="ListaDenuncias" component={ListaDenuncias}/>        
        <Stack.Screen name="DeclaracionJurada" component={DeclaracionJurada}/>
        <Stack.Screen name="DevolucionNroDenuncia" component={DevolucionNroDenuncia}/>
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
