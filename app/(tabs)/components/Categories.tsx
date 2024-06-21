import { categories } from "@/constants/Data";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="overflow-visible"
      >
        {categories.map((category, index) => {
          let isActive = category.id == activeCategory;
          let btnClass = isActive ? "bg-gray-500" : "bg-gray-100";
          let textClass = isActive
            ? "font-semibold text-gray-800 "
            : "text-gray-500";

          return (
            <View
              key={index}
              className="flex justify-center items-center mr-6 "
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                className={" p-3 rounded-full shadow " + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text className={"text-xs" + textClass}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
