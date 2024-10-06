import Constants from "expo-constants";
import { Text, View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";
import { Initial } from "../components/initial";


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={styles.bg}>
      <View style={{ marginTop: statusBarHeight + 6 }}>
        <Initial/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg:{
      backgroundColor: 'black',
  },
})