import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.header}>🏠 Bienvenida a Home</Text>

      {Array.from({ length: 20 }).map((_, i) => (
        <View key={i} style={[styles.box, { backgroundColor: '#4f46e5' }]}>
          <Text style={styles.boxText}>Home Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function PerfilScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.header}>👤 Perfil de Usuario</Text>

      {Array.from({ length: 20 }).map((_, i) => (
        <View key={i} style={[styles.box, { backgroundColor: '#059669' }]}>
          <Text style={styles.boxText}>Perfil Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function ConfigScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.header}>⚙️ Configuración</Text>

      {Array.from({ length: 20 }).map((_, i) => (
        <View key={i} style={[styles.box, { backgroundColor: '#dc2626' }]}>
          <Text style={styles.boxText}>Config Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const linking = {
  config: {
    screens: {
      Home: 'home',
      Perfil: 'perfil',
      Configuracion: 'configuracion',
    },
  },
};


export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#111827' },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#2563eb',
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
        <Tab.Screen name="Configuracion" component={ConfigScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111827',
  },
  box: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  boxText: {
    color: '#fff',
    fontWeight: '600',
  },
});