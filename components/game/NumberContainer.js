import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    padding: width < 380 ? 12 : 24,
    borderRadius: 8,
    margin: width < 380 ? 12 : 24,
    borderColor: Colors.accent500,
  },
  numberText: {
    color: Colors.accent500,
    fontSize: width < 380 ? 28 : 36,
    fontWeight: "bold",
  },
});
