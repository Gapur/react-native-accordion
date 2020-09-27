import * as React from "react";
import { View, Text, StyleSheet, Image, LayoutAnimation, TouchableOpacity, Platform, UIManager } from "react-native";

import { images } from "../src/assets";

interface AccordionProps {
  headerTitle: string;
  children: React.ReactNode;
  renderHeader?: () => void;
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Accordion({ headerTitle, children, renderHeader }: AccordionProps) {
  const [showContent, setShowContent] = React.useState(false);
  const renderAccordionHeader = () => {
    if (renderHeader) {
      return renderHeader();
    }
    return <Text>{headerTitle}</Text>;
  };

  const handleToggleContent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowContent(!showContent);
  };

  return (
    <View>
      {renderAccordionHeader()}
      {showContent && children}
      <TouchableOpacity style={styles.arrowBtn} onPress={handleToggleContent}>
        <Image style={styles.arrowBtnIcon} source={showContent ? images.arrowUp : images.arrowDown} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  arrowBtn: {
    alignItems: "center",
  },
  arrowBtnIcon: {
    height: 10,
    width: 16.5,
  },
});
