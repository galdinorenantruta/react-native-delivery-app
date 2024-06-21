import Categories from "@/app/(tabs)/components/Categories";
import { featured } from "@/constants/Data";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, Text, TextInput, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import FeaturedRow from "./components/FeaturedRow";

export default function Home() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar style="dark" />
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-10">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-grey-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">New York - NYC</Text>
          </View>
        </View>
        <View className="p-3 rounded-full bg-orange-400">
          <Icon.Sliders height="25" width="25" strokeWidth={3} stroke="white" />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/*Categorias*/}
        <Categories />

        {/*Features*/}
        <View className="mt-5">
          {[featured, featured, featured].map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
