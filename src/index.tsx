import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  LayoutAnimation,
  TouchableOpacity,
  Platform,
  UIManager,
  ViewStyle,
  TextStyle,
} from "react-native";

import { images } from "../src/assets";

export interface AccordionProps {
  style?: ViewStyle;
  headerStyle?: ViewStyle;
  headerTitle: string;
  headerTitleStyle?: TextStyle;
  children: React.ReactNode;
  showButton?: boolean;
  buttonStyle?: ViewStyle;
  renderHeader?: () => React.ReactNode;
  renderButtonContent?: (showContent: boolean) => React.ReactNode;
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Accordion({
  style = {},
  headerStyle = {},
  headerTitle,
  headerTitleStyle = {},
  children,
  showButton = false,
  buttonStyle = {},
  renderHeader,
  renderButtonContent,
}: AccordionProps) {
  const [showContent, setShowContent] = React.useState(false);

  const handleToggleContent = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowContent(!showContent);
  };

  const renderAccordionHeader = () => {
    if (renderHeader) {
      return renderHeader();
    }
    return <Text style={[styles.headerText, headerTitleStyle]}>{headerTitle}</Text>;
  };

  const renderBtnContent = () => {
    if (renderButtonContent) {
      return renderButtonContent(showContent);
    }
    return <Image style={styles.arrowBtnIcon} source={showContent ? images.arrowUp : images.arrowDown} />;
  };

  return (
    <View style={[styles.accordion, style]}>
      <TouchableOpacity style={headerStyle} disabled={showButton} onPress={handleToggleContent}>
        {renderAccordionHeader()}
      </TouchableOpacity>
      {showContent && children}
      {showButton && (
        <TouchableOpacity style={[styles.arrowBtn, buttonStyle]} onPress={handleToggleContent}>
          {renderBtnContent()}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    elevation: 1,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#2B3857",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  arrowBtn: {
    alignItems: "center",
  },
  arrowBtnIcon: {
    height: 10,
    width: 16.5,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "400",
  },
});
