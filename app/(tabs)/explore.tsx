import { Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Explore = () => {
  const height = hp("100%");

  return (
    <View className="flex-1 justify-center items-center bg-red-400">
      {/* <Text className="text-xl font-light text-white ">Nativewind explore</Text> */}
      <View
        className={`h-[60%] w-[20%] bg-blue-300 rounded-xl m-4 justify-center items-center `}
      >
        <View
          // style={{ width: wp("30%") }}
          className={` h-[90%] bg-yellow-300 rounded-xl m-4 `}
        >
          <Text className="text-xl font-light text-white "></Text>
        </View>
      </View>
      {/* <View className="w-10 h-10 bg-pink-400 m-4 rounded-full"></View>
      <View className="w-6 h-6 bg-pink-300 rounded-full"></View>
      <View className="w-4 h-4 bg-white rounded-full m-4"></View> */}
    </View>
  );
};

export default Explore;
