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
            <Icon.ArrowLeft strokeWidth={3} stroke="#e9e93a" />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white, mt-12 pt-6"
        >
          <View className="px-5">
            <Text className=""></Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;
