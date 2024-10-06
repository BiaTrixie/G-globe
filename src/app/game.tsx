import Constants from 'expo-constants';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para ícones
import { Link } from 'expo-router';

const statusBarHeight = Constants.statusBarHeight;

export default function GamificationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>Ranking</Text>

            <View style={styles.userRankingContainer}>
                <Text style={styles.userRankingText}>10°</Text>
            </View>

            <ScrollView style={styles.scrollContent}>
                <View style={styles.rankingItem}>
                    <Image source={{ uri: 'https://i.postimg.cc/nrRfRnfF/DSCF2722.jpg' }} style={styles.avatar} />
                    <Text style={styles.rankingText}>Beatriz Moura</Text>
                    <Text style={styles.rankPosition}>ranking 1º</Text>
                </View>
                <View style={styles.rankingItem}>
                    <Image source={{ uri: 'https://i.postimg.cc/85cHdG4B/gustavo.png' }} style={styles.avatar} />
                    <Text style={styles.rankingText}>Gustavo rocha</Text>
                    <Text style={styles.rankPosition}>ranking 2º</Text>
                </View>
                <View style={styles.rankingItem}>
                    <Image source={{ uri: 'https://i.postimg.cc/BvT9WTfw/fotowelita.jpg' }} style={styles.avatar} />
                    <Text style={styles.rankingText}>Welita Quirino</Text>
                    <Text style={styles.rankPosition}>ranking 3º</Text>
                </View>
                <View style={styles.rankingItem}>
                    <Image source={{ uri: 'https://i.postimg.cc/BvgYcM0s/a4b5bd23-7c20-4b39-96ea-fe73f7462806.jpg' }} style={styles.avatar} />
                    <Text style={styles.rankingText}>Jonathan</Text>
                    <Text style={styles.rankPosition}>ranking 4º</Text>
                </View>
                <View style={styles.userOwnRanking}>
                    <Image source={{ uri: 'https://i.postimg.cc/qRD1Wqq5/jander.jpg' }} style={styles.avatar} />
                    <Text style={styles.rankingText}>Jander</Text>
                    <Text style={styles.rankPosition}>ranking 10º</Text>
                </View>
            </ScrollView>

            <View style={styles.bottomBar}>
                <Link href="/home" asChild>
                    <Pressable style={styles.iconContainer}>
                        <Ionicons name="home-outline" size={24} color="#AAAAAA" />
                        <Text style={styles.iconLabel}>Início</Text>
                    </Pressable>

                </Link>
                <Link href="/profile" asChild>
                    <Pressable style={styles.iconContainer}>
                        <Ionicons name="game-controller-outline" size={24} color="#65B307" />
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
        textAlign: 'center',
    },
    userRankingContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    userRankingText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#65B307',
    },
    recycleInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    recycleInfoText: {
        fontSize: 16,
        color: '#777',
        marginLeft: 10,
    },
    scrollContent: {
        flexGrow: 1,
    },
    rankingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#65B307',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    userOwnRanking: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000080',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    rankingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        flex: 1,
    },
    rankPosition: {
        fontSize: 14,
        color: 'white',
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
