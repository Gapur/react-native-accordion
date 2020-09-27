import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from "react-native";

import { Header, Colors } from "react-native/Libraries/NewAppScreen";

function App() {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Header />
        {global.HermesInternal == null ? null : (
          <View style={styles.engine}>
            <Text style={styles.footer}>Engine: Hermes</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  engine: {
    position: "absolute",
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
