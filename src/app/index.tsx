import Constants from "expo-constants";
import { Text, View, ActivityIndicator, ScrollView, StyleSheet} from "react-native";


const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView>
      <View style={{ marginTop: statusBarHeight + 6 }}>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

})