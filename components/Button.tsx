import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Define props type
interface ButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  margin?: number;
  width?: number | `${number}%`;
  styledBtn?: ViewStyle;
}

const MainButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  backgroundColor = "#007bff",
  textColor = "#fff",
  margin = hp("2%"),
  width = "60%",
  fontFamily = "",
  styledBtn = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        styledBtn,
        { backgroundColor, margin, width } as ViewStyle,
      ]} // Ensure proper ViewStyle type
    >
      <Text style={[styles.text, { color: textColor, fontFamily: fontFamily }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: hp("1.5"),
    borderRadius: wp("3%"),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: hp("3%"),
    fontWeight: "bold",
  },
});

export default MainButton;
