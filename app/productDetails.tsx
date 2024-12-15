import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const productDetails = () => {
  const route = useRoute();
  const { product } = route.params || {};
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text>productDetails</Text>
      <Text style={{ color: "red", fontFamily: "Bold", fontSize: 50 }}>
        {product?.description}
      </Text>
    </View>
  );
};

export default productDetails;

const styles = StyleSheet.create({});
