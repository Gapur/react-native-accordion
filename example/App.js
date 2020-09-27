import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Accordion from "@gapur/react-native-accordion";

import { colors } from "./constants";

function App() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>react-native-accordion</Text>
      </View>
      <Accordion headerTitle="First">
        <Text>This content is hidden in the accordion</Text>
      </Accordion>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.kellyGreen,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "400",
  },
});

export default App;
