import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Image, ImageBackground } from "expo-image";
import { useGlobalSearchParams, useNavigation } from "expo-router";

import { ArrowLeftStoreIcon, HeartIcon3 } from "../assets/svgs/Svg";

const productDetails = () => {
  const route = useRoute();
  // const { product } = route.params();

  const { product } = useGlobalSearchParams();
  const productData = JSON.parse(product);

  // console.log(product);
  const navigation = useNavigation();

  useColorScheme();
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme);

  return (
    <View
      className={`flex-1 ${colorScheme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <Image source={productData?.image} />

      <ImageBackground
        placeholder={{
          blurhash:
            "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[",
        }}
        source={productData?.images && productData?.images[0]}
        style={{ width: wp("100%"), height: hp("40%") }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: hp("6%"),
            paddingHorizontal: wp("5%"),
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeftStoreIcon />
          </Pressable>
          <View>
            <HeartIcon3 />
          </View>
        </View>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: wp("3%"),
          paddingVertical: hp("2%"),
        }}
      >
        <Text
          style={{
            fontSize: hp("2.1%"),
            fontFamily: "SpaceMono",
            paddingBottom: hp("3%"),
          }}
          className={colorScheme === "dark" ? "text-white" : "text-black"}
        >
          {productData?.title}
        </Text>
        <Text
          style={{
            fontSize: hp("2.1%"),
            fontFamily: "SpaceMono",
            paddingBottom: hp("1%"),
          }}
          className={colorScheme === "dark" ? "text-white" : "text-black"}
        >
          Price:
        </Text>
        <Text
          style={{
            fontSize: hp("1.6%"),
            paddingBottom: hp("3%"),
          }}
          className={colorScheme === "dark" ? "text-white" : "text-black"}
        >
          {productData?.price}
        </Text>

        <Text
          style={{
            fontSize: hp("2.1%"),
            fontFamily: "SpaceMono",
            paddingBottom: hp("1%"),
          }}
          className={colorScheme === "dark" ? "text-white" : "text-black"}
        >
          Description:
        </Text>
        <Text
          style={{ fontSize: hp("1.6%") }}
          className={colorScheme === "dark" ? "text-white" : "text-black"}
        >
          {productData?.description}
        </Text>
      </View>
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({});
