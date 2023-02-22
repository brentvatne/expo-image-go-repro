import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        contentFit="contain"
        source={{
          uri: "https://d33wubrfki0l68.cloudfront.net/d74da08f08b4a17c368b58d36ee23c368b4a6819/fff62/img/homepage/phones.png",
        }}
        style={{
          height: 100,
          width: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
