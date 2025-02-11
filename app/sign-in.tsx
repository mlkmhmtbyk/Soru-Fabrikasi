import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Image
            style={styles.headerImage}
            source={require("../assets/images/Logo2Buyuk.png")}
          />
        </TouchableOpacity>
        <View style={styles.headerTexts}>
          <Text style={styles.headerText}>Gizlilik</Text>
          <Text style={styles.headerText}>Giriş Yap</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
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
