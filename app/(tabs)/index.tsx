import {
  Appearance,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  // useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { router, useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { DarkModeIcon2 } from "../../assets/svgs/Svg";
import MainInput from "../../components/MainInput";
// import LinearGradient from "react-native-linear-gradient";

const Home = () => {
  const navigation = useNavigation();
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

  useColorScheme();
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme);

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    // console.log(colorScheme);

    return () => listener.remove();
  }, [colorScheme]);
  const toggleDarkMode = () => {
    const newColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newColorScheme);
  };
  const router = useRouter();
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

  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/products");
      setProduct(res.data.slice(2, 46));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <View
      // className={`flex-1 ${colorScheme === "dark" ? "bg-black" : "bg-white"}`}
      className="flex-1  bg-white dark:bg-black "
    >
      {/* header */}
      <Pressable className="  px-5 bg-pink-600 active:opacity-75 transition-opacity duration-[3s] dark:bg-yellow-600 active:dark:bg-yellow-800  h-[21%] pt-11">
        {/* <View className="px-5 bg-gradient-to-r from-indigo-500 via-yellow-500 to-pink-700 h-[21%] pt-11  "> */}

        <View className="justify-between flex-row items-center">
          <View>
            <Text className="text-white text-lg font-jersey  ">
              Welcome Home
            </Text>
            <Text className="text-white text-xl  font-bold">
              Mokhles Tarmiz
            </Text>
          </View>
          <View className="flex-row justify-center items-center gap-[1%]">
            <View>
              <Pressable onPress={toggleDarkMode}>
                <DarkModeIcon2
                  color={colorScheme === "dark" ? "black" : "white"}
                />
              </Pressable>
            </View>
            <View>
              <Animated.View entering={FadeInUp.delay(500).springify()}>
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
        </View>
        <View className="justify-center items-center">
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
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="pb-32">
          <View className="px-5 pt-6">
            <View className="flex-row justify-between items-center">
              <Text
                style={{
                  fontSize: hp("2.5"),
                  color: colorScheme === "dark" ? "white" : "black",
                }}
              >
                Explore Topics
              </Text>

              <Text className="text-sm pt-1 text-slate-400">View All</Text>
            </View>
          </View>
          <View>
            <FlatList
              data={Topics}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{ marginHorizontal: wp("1%") }} />
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => setSelectedTopic(item.name)}
                  style={{
                    alignItems: "center",
                    marginStart: index === 0 ? wp("5%") : 0,
                    marginEnd: index === Topics.length - 1 ? wp("5%") : 0,
                  }}
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
                Recommended Products
              </Text>

              <Text className="text-sm pt-1 text-slate-400">View All</Text>
            </View>
          </View>
          <View
          // style={{
          //   paddingStart: wp("5%"),
          // }}
          >
            <FlatList
              data={product}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{ marginHorizontal: wp("1%") }} />
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                // Parse the images array

                return (
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      marginVertical: hp("2%"),
                      marginStart: index === 0 ? wp("5%") : 0,
                      marginEnd: index === product.length - 1 ? wp("5%") : 0,
                    }}
                    onPress={() =>
                      // navigation.navigate("productDetails", {
                      //   product: item,
                      // })
                      router.navigate({
                        pathname: "/productDetails",
                        params: { product: JSON.stringify(item) },
                      })
                    }
                  >
                    <Image
                      className="h-44 w-28 rounded-2xl"
                      //only with animated.Image
                      source={item?.images && item?.images[0]}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{ paddingHorizontal: wp("5%") }}>
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
                Our Stores
              </Text>

              <Text className="text-sm pt-1 text-slate-400">View All</Text>
            </View>
          </View>
          <View
          // style={{
          //   paddingStart: wp("5%"),
          // }}
          >
            <FlatList
              data={product.slice(20, 45)}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => (
                <View style={{ marginHorizontal: wp("1%") }} />
              )}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => {
                // Parse the images array

                return (
                  <TouchableOpacity
                    style={{
                      alignItems: "center",
                      marginVertical: hp("2%"),
                      marginStart: index === 0 ? wp("5%") : 0,
                      marginEnd: index === product.length - 1 ? wp("5%") : 0,
                    }}
                  >
                    <Image
                      placeholder={{
                        blurhash:
                          "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[",
                      }}
                      style={{
                        height: hp("20%"),
                        width: wp("27%"),
                        borderRadius: wp("5%"),
                      }}
                      source={item?.images && item?.images[0]}
                      contentFit="cover"
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
