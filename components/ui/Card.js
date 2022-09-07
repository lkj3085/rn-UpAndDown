import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const width = Dimensions.get("window").width;

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16, //여백
    marginTop: width < 380 ? 18 : 36, //바깥 여백
    marginHorizontal: 24, // 양옆간격
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
