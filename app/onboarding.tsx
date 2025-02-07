import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Carousel from "@/components/Carousel";

const onboarding = () => {
  const handleLogin = async () => {
    console.log("login yapıldı.");
  };

  return (
    <View style={styles.container}>
      <Carousel />
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
    </View>
  );
};

export default onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
