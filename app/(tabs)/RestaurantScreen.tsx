import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { Restaurant } from "./components/FeaturedRow";
import * as Icon from "react-native-feather";
import { useNavigation } from "expo-router";

type RestaurantRouteParams = {
  Restaurant: {
    item: Restaurant; // Assuming 'Restaurant' is a type you have defined elsewhere
  };
};

const RestaurantScreen = () => {
  const route = useRoute<RouteProp<RestaurantRouteParams, "Restaurant">>();
  let item = route.params.item;
  console.log(item);

  const navigation = useNavigation<any>();

  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item?.image} />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="top-14 absolute left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icon.ArrowLeft strokeWidth={3} stroke="#0a0a0a" />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-bold ">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center">
                <Icon.Star
                  height="30"
                  width="30"
                  stroke="#ffffff"
                  fill="#e9e93a"
                />
                <Text className="text-md">
                  <Text className="text-green-700 ">{item.stars}</Text>
                  <Text className="text-gray-700">
                    ({item.reviews} review) -
                    <Text className="font-semibold">{item.category}</Text>
                  </Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin height="20" width="20" stroke="gray" />
                <Text className="text-gray-700 text-xs">
                  Nearby - {item.address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
