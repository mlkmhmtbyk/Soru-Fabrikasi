import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Carousel from "@/components/Carousel";
import { router } from "expo-router";

const Index = () => {
  const openSignUp = async () => {
    router.push("/sign-up");
  };

  return (
    <View style={styles.container}>
      <Carousel />
      <View className="flex-1 justify-end py-10 px-10">
        <TouchableOpacity
          onPress={openSignUp}
          className="bg-white shadow-md shadow-zinc-500 rounded-full w-full py-4"
        >
          <View className="flex flex-row items-center justify-center">
            <Text className="text-xl text-center font-notoSans text-black-200">
              Kayıt ol
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
