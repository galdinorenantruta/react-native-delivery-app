import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { Restaurant } from "./FeaturedRow";
import * as Icon from "react-native-feather";
import { useNavigation } from "expo-router";

interface RestaurantCardProps {
  item: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ item }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("RestaurantScreen", { item: item });
      }}
    >
      <View
        style={{
          shadowColor: "#ff0000",
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg "
      >
        <Image source={item.image} className="h-36 w-64 rounded-t-3xl " />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center">
            <Icon.Star height="30" width="30" stroke="#ffffff" fill="#e9e93a" />
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantCard;
