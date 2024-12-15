import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Using Ionicons, replace with any icon library
import { BlurView } from "expo-blur"; // Using expo-blur for blur effect
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface MainInputProps {
  backgroundColorTransparent?: boolean;
  icon?: any;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const MainInput: React.FC<MainInputProps> = ({
  backgroundColorTransparent = false,
  icon,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColorTransparent
            ? "transparent"
            : "#f1f1f1",
        },
      ]}
    >
      {backgroundColorTransparent ? (
        <BlurView
          intensity={60}
          style={[styles.blurContainer, styles.inputBox]}
        >
          {icon && (
            <Ionicons
              name={icon}
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
          )}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#888"
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
        </BlurView>
      ) : (
        <View style={styles.whiteContainer}>
          {icon && (
            <Ionicons name={icon} size={20} color="grey" style={styles.icon} />
          )}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#888"
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    marginVertical: 8,
    borderRadius: wp("3%"),
  },
  inputBox: {
    borderRadius: wp("2%"),
    overflow: "hidden",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: wp("1%"),
    // Apply border radius to the TextInput
  },
  icon: {
    marginRight: wp("1%"),
  },
  blurContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingStart: wp("3%"),
  },
  whiteContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingStart: wp("3%"),
    borderRadius: wp("1%"),
  },
});

export default MainInput;
