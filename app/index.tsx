import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import MainButton from "../components/Button";

const Welcome = () => {
  const animationRef = useRef<LottieView>(null);
  const isPaused = useRef(false);

  const handlePress = () => {
    if (animationRef.current) {
      if (isPaused.current) {
        animationRef.current.play();
      } else {
        animationRef.current.pause();
      }
      isPaused.current = !isPaused.current;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View entering={FadeInUp.duration(500).delay(300).springify()}>
        <Pressable
        //onPress={handlePress} //STOP the animation
        >
          <LottieView
            ref={animationRef}
            source={require("@/assets/animations/discoverAnimation.json")}
            autoPlay
            loop
            style={{ width: wp("100%"), height: hp("40%") }}
          />
        </Pressable>
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(500).delay(300).springify()}>
        <Text
          style={{
            color: "grey",
            textAlign: "center",
            fontSize: hp("2%"),
          }}
        >
          Reanimated React Native !
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInUp.duration(500).delay(500).springify()}>
        <MainButton
          onPress={() => router.replace("/(tabs)")}
          text="Explore"
          backgroundColor="#5100de"
          width={wp("70%")}
          styledBtn={{
            shadowColor: "black",
            shadowOffset: { width: 5, height: 15 },
            shadowOpacity: 0.35,
            shadowRadius: 10, // Larger, softer shadow
            elevation: 15, // Stronger shadow on Android
          }}
        />
      </Animated.View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
