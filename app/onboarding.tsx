import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Carousel from "@/components/Carousel";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const onboarding = () => {
  const openSignUp = async () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  headerTexts: {
    width: 150,
    flexDirection: "row",
  },
  headerText: {
    color: "#01243A",
    fontSize: 16,
    paddingHorizontal: 12,
  },
});
