import { View, Text, StyleSheet, Pressable } from 'react-native';

export function Initial() {
    return (
        <View style={styles.conatiner}>
            <Text style={styles.titulo}>
                Você é um professor ou um aluno?
            </Text>
            <View style={styles.box}>
                <Pressable>
                    <Text style={styles.buttonp}>
                        PROFESSOR
                    </Text>
                </Pressable>
            </View>
            <View style={styles.box}>
                <Pressable>
                    <Text style={styles.buttonp}>
                        ALUNO
                    </Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        margin: 10,
    },
    buttonp: {
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
        fontWeight: 600,
    },
    textG: {
        color: 'white'
    },
    conatiner: {
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 300,
    }
})