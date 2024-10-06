import Constants from 'expo-constants';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para ícones
import { Link } from 'expo-router';

const statusBarHeight = Constants.statusBarHeight;

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho do Perfil */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      {/* Informações do Usuário */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/user_avatar.jpg' }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Beatriz de Moura Guimarães</Text>
        <Text style={styles.userEmail}>beatriz@example.com</Text>
      </View>

      {/* Botão de Editar Perfil */}
      <Pressable style={styles.editButton}>
        <Ionicons name="create-outline" size={20} color="white" />
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </Pressable>

      <View style={styles.bottomBar}>
      <Link href="/home" asChild>
      <Pressable style={styles.iconContainer}>
            <Ionicons name="home-outline" size={24} color="#AAAAAA" />
            <Text style={styles.iconLabel}>Início</Text>
          </Pressable>
        </Link>
        <Link href="/game" asChild>
        <Pressable style={styles.iconContainer}>
            <Ionicons name="game-controller-outline" size={24} color="#AAAAAA" />
            <Text style={styles.iconLabel}>Gamificação</Text>
          </Pressable>
        </Link>
        <Link href="/profile" asChild>
          <Pressable style={styles.iconContainer}>
            <Ionicons name="person-outline" size={24} color="#65B307" />
            <Text style={styles.iconLabel}>Perfil</Text>
          </Pressable>
        </Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginTop: statusBarHeight + 6,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userEmail: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  editButton: {
    backgroundColor: '#65B307',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 4,
  },
});
