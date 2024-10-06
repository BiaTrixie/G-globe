import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export function Initial() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Você é um professor ou um aluno?
            </Text>
            <View style={styles.box}>
                <Link href="/home" asChild>
                    <Pressable>
                        <Text style={styles.button}>
                            PROFESSOR
                        </Text>
                    </Pressable>
                </Link>

            </View>
            <View style={styles.box}>
                <Link href="/home" asChild>
                    <Pressable>
                        <Text style={styles.button}>
                            ALUNO
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        margin: 10,
    },
    button: {
        color: 'white',
        backgroundColor: '#65B307',
        padding: 12,
        borderRadius: 20,
        width: 300,
        textAlign: 'center',
    },
    titulo: {
        paddingBottom: 30,
        color: 'white',
        fontSize: 22,
    },
    textG: {
        color: 'white'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})