import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

// const width = Dimensions.get("window").width;

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 300) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your Phone needed
          <Text style={styles.highlight}> {roundsNumber} </Text>
          Round to Guess the number
          <Text style={styles.highlight}> {userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Again</PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: width < 380 ? 150 : 300,
    // height: width < 380 ? 150 : 300,
    // borderRadius: width < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500,
  },
});
