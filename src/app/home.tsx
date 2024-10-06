import Constants from 'expo-constants';
import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const statusBarHeight = Constants.statusBarHeight;

export default function ProtocolsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>PROTOCOLOS</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Pesquise o protocolo"
            />

            {/* Seção de tabs "Cadastrar" e "Educação" lado a lado */}
            <View style={styles.tabContainer}>
                <Text style={styles.activeTab}>Cadastrar</Text>
                <Text style={styles.inactiveTab}>Educação</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>Protocolo de Sustentabilidade</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>Protocolo de Gestão Sustentável</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemTitle}>Protocolo de Práticas de Reciclagem</Text>
                </View>
            </ScrollView>

            <View style={styles.bottomBar}>
                <Pressable style={styles.iconContainer}>
                    <Ionicons name="home-outline" size={24} color="#65B307" />
                    <Text style={styles.iconLabel}>Início</Text>
                </Pressable>
                <Link href="/game" asChild>
                    <Pressable style={styles.iconContainer}>
                        <Ionicons name="game-controller-outline" size={24} color="#AAAAAA" />
                        <Text style={styles.iconLabel}>Gamificação</Text>
                    </Pressable>
                </Link>

                <Pressable style={styles.iconContainer}>
                    <Ionicons name="person-outline" size={24} color="#AAAAAA" />
                    <Text style={styles.iconLabel}>Perfil</Text>
                </Pressable>
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
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    searchInput: {
        backgroundColor: '#F0F0F0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    activeTab: {
        color: '#65B307',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inactiveTab: {
        color: '#AAAAAA',
        fontWeight: 'bold',
        fontSize: 16,
    },
    scrollContent: {
        flexGrow: 1,
    },
    itemContainer: {
        backgroundColor: '#F0F0F0',
        padding: 20,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
        paddingVertical: 10,
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
