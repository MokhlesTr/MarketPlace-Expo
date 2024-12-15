import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MainButton from "@/components/Button";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import MainInput from "@/components/MainInput";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
const Home = () => {
  const animationRef = useRef<LottieView>(null);
  const isPaused = useRef(false);

  const [selectedTopic, setSelectedTopic] = useState<string>("Business");

  const handlePress = () => {
    console.log("notification Pressed");
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const colorScheme = useColorScheme();

  interface TopicsInterface {
    id: string;
    name: string;
    icon: string;
  }
  const Topics: TopicsInterface[] = [
    {
      id: "Business",
      name: "Business",
      icon: "briefcase",
    },
    {
      id: "Tech",
      name: "Tech",
      icon: "laptop",
    },
    {
      id: "Sports",
      name: "Sports",
      icon: "football",
    },
    {
      id: "World",
      name: "World",
      icon: "globe",
    },
    {
      id: "Entertainment",
      name: "Entertainment",
      icon: "tv",
    },
    {
      id: "Science",
      name: "Science",
      icon: "flask",
    },
    {
      id: "Lifestyle",
      name: "Lifestyle",
      icon: "home",
    },

    {
      id: "Books",
      name: "Books",
      icon: "book",
    },
    {
      id: "Movies",
      name: "Movies",
      icon: "film",
    },
    {
      id: "Environment",
      name: "Environment",
      icon: "leaf",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* header */}
      <View
        style={{
          paddingHorizontal: wp("5%"),
          backgroundColor: "#5100de",
          height: hp("21%"),
          paddingTop: hp("5%"),
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: hp("2"),
              }}
            >
              Welcome Home
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: hp("3%"),
                fontFamily: "Bold",
              }}
            >
              Mokhles Tarmiz
            </Text>
          </View>
          <View>
            <Animated.View
              entering={FadeInUp.duration(500).delay(2000).springify()}
            >
              <Pressable onPress={handlePress}>
                <LottieView
                  ref={animationRef}
                  source={require("@/assets/animations/notifAnimation.json")}
                  autoPlay
                  loop
                  style={{ width: wp("8%"), height: hp("8%") }}
                />
              </Pressable>
            </Animated.View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Animated.View
            entering={FadeInUp.duration(500).delay(300).springify()}
          > */}
          <MainInput
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Enter something"
            icon="search"
            backgroundColorTransparent={true}
          />
          {/* </Animated.View> */}
        </View>
      </View>
      <View style={{ paddingHorizontal: wp("5%"), paddingTop: hp("3%") }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: hp("2.5"),
              color: colorScheme === "dark" ? "white" : "black",
            }}
          >
            Explore Topics
          </Text>

          <Text
            style={{
              fontSize: hp("1.5"),
              paddingTop: hp("1%"),
              color: "grey",
            }}
          >
            View All
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: wp("5%"),
        }}
      >
        <FlatList
          data={Topics}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: wp("1%") }} />
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTopic(item.name)}
              style={{ alignItems: "center" }}
            >
              <View
                style={{
                  borderWidth: wp("0.25%"),
                  height: hp("10%"),
                  width: hp("10%"),
                  borderRadius: wp("50%"),
                  borderColor:
                    selectedTopic === item.name
                      ? colorScheme === "dark"
                        ? "#a9c700"
                        : "blue"
                      : "grey",
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: hp("2%"),
                }}
              >
                <Ionicons
                  name={item.icon as any}
                  size={wp("10%")}
                  color={
                    selectedTopic === item.name
                      ? colorScheme === "dark"
                        ? "#a9c700"
                        : "blue"
                      : "grey"
                  }
                />
              </View>
              <Text
                style={{
                  fontWeight: selectedTopic === item.name ? "700" : "300",
                  color:
                    selectedTopic === item.name
                      ? colorScheme === "dark"
                        ? "#a9c700"
                        : "blue"
                      : "grey",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
