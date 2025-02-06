import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "@/constants/images";

const onboarding = () => {
  const handleLogin = async () => {
    console.log("login yapıldı.");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-3xl text-center font-notoSans-bold text-black-200">
            Sınırsız Soru, Deneme ve çok daha fazlası
          </Text>
          <Text className="text-xl text-center font-notoSans text-black-200">
            Hemen kayıt ol ve sorulara eriş
          </Text>
        </View>
        <View className="flex-1 justify-end py-10 px-10">
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-500 rounded-full w-full py-4"
          >
            <View className="flex flex-row items-center justify-center">
              <Text className="text-xl text-center font-notoSans text-black-200">
                Kayıt ol
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default onboarding;
