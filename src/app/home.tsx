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

            <View style={styles.tabContainer}>
                <Text style={styles.activeTab}>Educação</Text>
                <Text style={styles.inactiveTab}>| Cadastrar</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {[
                    {
                        title: 'Atmosfera',
                        description: 'Certificado | Carga Horária: 50H',
                    },
                    {
                        title: 'Biosfera',
                        description: 'Certificado | Carga Horária: 60H',
                    },
                    {
                        title: 'Hidrosfera',
                        description: 'Certificado | Carga Horária: 50H',
                    },
                    {
                        title: 'Pedosfera',
                        description: 'Certificado | Carga Horária: 50H',
                    },
                    {
                        title: 'A Terra como um Sistema',
                        description: 'Certificado | Carga Horária: 80H',
                    },
                ].map((item, index) => (
                    <View key={index} style={styles.itemContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                    </View>
                ))}
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
                <Link href="/profile" asChild>
                    <Pressable style={styles.iconContainer}>
                        <Ionicons name="person-outline" size={24} color="#AAAAAA" />
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        padding: 4,
    },
    activeTab: {
        color: '#65B307',
        fontWeight: 'bold',
        fontSize: 16,
        margin: 4,
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
    itemDescription: {
        fontSize: 14,
        color: '#666',
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