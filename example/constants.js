import { getStatusBarHeight } from "react-native-status-bar-height";

import { images } from "./assets";

export const statusBarHeight = getStatusBarHeight();
export const SCREEN_HEADER_HEIGHT = 50;

export const colors = {
  kellyGreen: "#6BCD28",
  shipCove: "#7A8EB1",
  white: "#FFFFFF",
  biscay: "#2B3857",
  black: "#323246",
  darkBlack: "#000",
  azure: "#f0ffff",
  shadow: "rgba(0,0,0, 0.11)",
  iron: "#c1cdcd",
  grey: "#737384",
};

export const SOCIAL_APPS = [
  {
    title: "Facebook",
    description:
      "Connect with friends and the world around you on Facebook. With over 2.7 billion monthly active users as of the second quarter of 2020, Facebook is the biggest social network worldwide.",
    bgColor: "#3B5998",
    imageUrl: images.facebook,
  },
  {
    title: "WhatsApp",
    description:
      "With WhatsApp, you will get fast, simple, secure messaging and calling for free*, available on phones all over the world.",
    bgColor: "#43d854",
    imageUrl: images.whatsapp,
  },
  {
    title: "Instagram",
    description:
      "Bringing you closer to the people and things you love. Total Number of Monthly Active Instagram Users: 1 billion +",
    bgColor: "#C13584",
    imageUrl: images.instagram,
  },
];
