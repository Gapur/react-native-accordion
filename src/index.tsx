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

interface AccordionProps {
  style?: ViewStyle;
  headerTitleContainer?: ViewStyle;
  headerTitle: string;
  headerTitleStyle?: TextStyle;
  children: React.ReactNode;
  showButton?: boolean;
  buttonStyle?: ViewStyle;
  renderHeader?: () => void;
  renderButtonContent?: () => React.ReactNode;
}

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Accordion({
  style = {},
  headerTitleContainer = {},
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
    return (
      <TouchableOpacity style={headerTitleContainer} disabled={showButton} onPress={handleToggleContent}>
        <Text style={[styles.headerText, headerTitleStyle]}>{headerTitle}</Text>
      </TouchableOpacity>
    );
  };

  const renderBtnContent = () => {
    if (renderButtonContent) {
      return renderButtonContent();
    }
    return <Image style={styles.arrowBtnIcon} source={showContent ? images.arrowUp : images.arrowDown} />;
  };

  return (
    <View style={style}>
      {renderAccordionHeader()}
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
