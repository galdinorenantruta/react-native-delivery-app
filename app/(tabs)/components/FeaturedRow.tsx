import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./RestaurantCard";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: any;
}

export interface Restaurant {
  id: number;
  name: string;
  image: any;
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: Dish[];
}

interface FeaturedRowProps {
  title: string;
  description: string;
  restaurants: Restaurant[];
}

const FeaturedRow: React.FC<FeaturedRowProps> = ({
  title,
  description,
  restaurants,
}) => {
  return (
    <View>
      <View className="flex-row justify-between items-centr px-4">
        <View>
          <Text className="font-bold text-lg ">{title}</Text>
          <Text className="text-gray-500 text-xs "> {description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-orange-600">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5  "
      >
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard item={restaurant} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
