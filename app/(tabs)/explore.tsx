import { Text, View } from "react-native";
import React from "react";

const Explore = () => {
  return (
    <View className="flex-1 justify-center items-center bg-purple-700">
      <Text className="text-xl font-light text-white ">Nativewind explore</Text>
      <View className=" pt-4 pb-4 pl-4 pr-4 bg-blue-300 rounded-xl m-4 ">
        <Text className="text-xl font-light text-white ">
          Nativewind explore
        </Text>
      </View>
      <View className="w-10 h-10 bg-pink-400 m-4 rounded-full"></View>
      <View className="w-6 h-6 bg-pink-300 rounded-full"></View>
      <View className="w-4 h-4 bg-white rounded-full m-4"></View>
    </View>
  );
};

export default Explore;
