import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
} from "react-native";
import Accordion from "@gapur/react-native-accordion";

import {
  colors,
  statusBarHeight,
  SCREEN_HEADER_HEIGHT,
  SOCIAL_APPS,
} from "./constants";

const [FACEBOOK, WHATSAPP, INSTAGRAM] = SOCIAL_APPS;

function App() {
  const renderAccordionHeader = () => (
    <View style={styles.headerRow}>
      <Image style={styles.socialImage} source={FACEBOOK.imageUrl} />
      <View style={styles.headerValue}>
        <Text style={styles.headerLabelText}>{FACEBOOK.title}</Text>
        <Text style={styles.headerValueText}>{FACEBOOK.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>React Native Accordion</Text>
        </View>
      </SafeAreaView>
      <Accordion
        showButton
        style={styles.accordion}
        renderHeader={() => renderAccordionHeader()}>
        <View style={styles.headerRow}>
          <Image style={styles.socialImage} source={WHATSAPP.imageUrl} />
          <View style={styles.headerValue}>
            <Text style={styles.headerLabelText}>{WHATSAPP.title}</Text>
            <Text style={styles.headerValueText}>{WHATSAPP.description}</Text>
          </View>
        </View>
        <View style={styles.headerRow}>
          <Image style={styles.socialImage} source={INSTAGRAM.imageUrl} />
          <View style={styles.headerValue}>
            <Text style={styles.headerLabelText}>{INSTAGRAM.title}</Text>
            <Text style={styles.headerValueText}>{INSTAGRAM.description}</Text>
          </View>
        </View>
      </Accordion>

      <FlatList
        data={SOCIAL_APPS}
        keyExtractor={(company) => String(company.title)}
        renderItem={({ item }) => {
          return (
            <Accordion
              style={styles.flatAccordion}
              headerTitle={item.title}
              showButton={false}>
              <View style={styles.headerRow}>
                <Image style={styles.socialImage} source={item.imageUrl} />
                <Text style={styles.headerValueText}>{item.description}</Text>
              </View>
            </Accordion>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 22,
    paddingTop: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  flatAccordion: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 1,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: colors.biscay,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  header: {
    alignItems: "center",
    backgroundColor: colors.white,
    flexDirection: "row",
    height: SCREEN_HEADER_HEIGHT,
    justifyContent: "center",
  },
  headerLabelText: {
    color: colors.black,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19,
  },
  headerRow: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 23,
  },
  headerValue: {
    marginLeft: 12,
    width: "90%",
  },
  headerValueText: {
    color: colors.grey,
    flexShrink: 1,
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 19,
  },
  safearea: {
    backgroundColor: colors.white,
    overflow: "hidden",
    paddingTop: statusBarHeight,
    zIndex: 3,
  },
  screen: {
    backgroundColor: colors.azure,
    flex: 1,
    flexGrow: 1,
  },
  socialImage: {
    height: 20,
    marginRight: 4,
    width: 20,
  },
});

export default App;
