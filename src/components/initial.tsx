import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable, Image, ImageBackground } from 'react-native';

export function Initial() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/images/ecologia.png')} 
                style={styles.logo}
            />
            <Text style={styles.titulo}>
                BEM VINDO A MISSÃO TERRA
            </Text>
            <Text style={styles.descricao}>
                Você está preparado para ajudar a identificar problemas na terra e fazer a diferença?
            </Text>

            <View style={styles.box}>
                <Link href="/home" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>
                            VAMOS COMEÇAR!
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,  
        height: 150, 
        marginBottom: 20, 
    },
    titulo: {
        paddingBottom: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    descricao: {
        paddingBottom: 40,
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    box: {
        position: 'absolute', 
        bottom: 50,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#65B307',
        padding: 12,
        borderRadius: 20,
        width: 300,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
