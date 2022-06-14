import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ClickButton from "./components/ClickButton";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const buttonGradientColors = ["#c0392b", "#f1c40f", "#8e44ad"];

  function incrementCounterHandler() {
    setClicks(clicks + 1);
  }

  function resetCounterHandler() {
    setClicks(0);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{`The button has been clicked ${clicks} times`}</Text>
      <ClickButton
        buttonText="Click Me!"
        gradientColors={buttonGradientColors}
        buttonContainerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={incrementCounterHandler}
      />
      <ClickButton
        buttonText="Reset"
        gradientColors={buttonGradientColors}
        buttonContainerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
        onPress={resetCounterHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginVertical: 6,
    minWidth: 200,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
  },
});
