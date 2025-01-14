import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useColorScheme } from "react-native"; // For detecting the system color scheme

const Design = () => {
  const systemColorScheme = useColorScheme(); // Detect the system color scheme
  const [colorScheme, setColorScheme] = useState(systemColorScheme); // State to toggle color scheme

  // Function to toggle color scheme
  const toggleColorMode = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <View className={`flex-1 justify-center items-center dark:bg-yellow-800  `}>
      <Text
        className={`text-center text-3xl ${
          colorScheme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {colorScheme === "dark" ? "Dark Mode" : "Light Mode"}
      </Text>

      <Pressable
        onPress={toggleColorMode}
        className={`mt-5 p-4 rounded-lg bg-blue-500 dark:bg-yellow-500`}
      >
        <Text className="text-center text-white">Toggle Theme</Text>
      </Pressable>
    </View>
  );
};

export default Design;
