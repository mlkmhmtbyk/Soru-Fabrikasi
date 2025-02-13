import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import React from "react";
import Carousel from "@/components/Carousel";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const openSignUp = async () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logo}>
          <Image
            style={styles.headerImage}
            source={require("../../../assets/images/Logo2Buyuk.png")}
          />
        </TouchableOpacity>
        <View style={styles.headerTexts}>
          <View style={styles.headerText}>
            <Text
              className="font-notoSans text-paletteDarkBlue"
              style={styles.privacyText}
            >
              Gizlilik
            </Text>
          </View>
          <View style={styles.headerText}>
            <Text style={styles.loginText}>Giriş Yap</Text>
          </View>
        </View>
      </View>
      <View style={styles.carousel}>
        <Carousel />
      </View>
      <View style={styles.signUpContainer}>
        <TouchableOpacity
          style={styles.signUpButton}
          className="shadow-md shadow-zinc-500 rounded-full w-5/6 py-4"
          onPress={openSignUp}
        >
          <View style={styles.signUpButtonTextContainer}>
            <Text
              style={styles.signUpButtonText}
              className="text-xl font-notoSans text-white"
            >
              Kayıt ol
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#white",
  },
  header: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  logo: {
    flex: 1,
    backgroundColor: "white",
  },
  headerImage: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  headerTexts: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  headerText: {
    backgroundColor: "white",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  privacyText: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "white",
  },
  loginText: {
    fontSize: 18,
    flex: 1,
    backgroundColor: "white",
  },
  carousel: {
    flex: 8,
    backgroundColor: "white",
  },
  signUpContainer: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    backgroundColor: "#A2CEED",
  },
  signUpButtonTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButtonText: {
    textAlign: "center",
  },
});
