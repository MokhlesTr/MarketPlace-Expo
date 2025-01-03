import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
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
import axios from "axios";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { DarkModeIcon, DarkModeIcon2 } from "@/assets/svgs/Svg";

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
  const [colorScheme, setColorScheme] = useState(useColorScheme());
  const toggleDarkMode = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

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
      setProduct(res.data.slice(0, 46)); // Use `res.data` to extract the actual array of products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colorScheme === "dark" ? "black" : "white",
      }}
    >
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: wp("2%"),
            }}
          >
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
                    // autoPlay
                    // loop
                    style={{ width: wp("8%"), height: hp("8%") }}
                  />
                </Pressable>
              </Animated.View>
            </View>
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
      <ScrollView>
        <View style={{ paddingBottom: hp("10%") }}>
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
                      navigation.navigate("productDetails", {
                        product: item,
                      })
                    }
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
