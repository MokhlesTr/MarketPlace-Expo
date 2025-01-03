import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Image, ImageBackground } from "expo-image";
import { useNavigation } from "expo-router";
import {
  ArrowLeftIcon,
  ArrowLeftStoreIcon,
  HeartIcon2,
  HeartIcon3,
} from "@/assets/svgs/Svg";

const productDetails = () => {
  const route = useRoute();
  const { product } = route.params || {};
  console.log(product);
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Image source={product?.image} />
      <ImageBackground
        placeholder={{
          blurhash:
            "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[",
        }}
        source={product?.images && product?.images[0]}
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
            color: "black",
            fontSize: hp("2.1%"),
            fontFamily: "SpaceMono",
            paddingBottom: hp("3%"),
          }}
        >
          {product?.title}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: hp("2.1%"),
            fontFamily: "SpaceMono",
            paddingBottom: hp("1%"),
          }}
        >
          Price:
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: hp("1.6%"),
            paddingBottom: hp("3%"),
          }}
        >
          {product?.price}
        </Text>

        <Text
          style={{
            color: "black",
            fontSize: hp("2.1%"),
            fontFamily: "SpaceMono",
            paddingBottom: hp("1%"),
          }}
        >
          Description:
        </Text>
        <Text style={{ fontSize: hp("1.6%") }}>{product?.description}</Text>
      </View>
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({});
