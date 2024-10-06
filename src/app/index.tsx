import Constants from "expo-constants";
import { Text, View, ActivityIndicator, ScrollView, StyleSheet, ImageBackground } from "react-native";
import { Initial } from "../components/initial";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/folha-bg-desktop.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        {/* Controla opacidade */}
        <View style={styles.overlay} />

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Initial />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});
