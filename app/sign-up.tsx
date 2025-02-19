import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "../constants/palette";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const openLogin = async () => {
    router.push("/login");
  };

  function handleSignUp() {
    console.log("SignUp");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.pageContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.push("/")}
            style={styles.logo}
          >
            <Image
              style={styles.headerImage}
              source={require("@/assets/images/Logo2Buyuk.png")}
            />
          </TouchableOpacity>
          <View style={styles.headerTexts}>
            <View style={styles.headerText}>
              <TouchableOpacity onPress={openLogin}>
                <Text style={styles.loginText}>Giriş Yap</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formField}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="E-mail"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <View style={styles.formField}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="Şifre"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <View style={styles.formField}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="Şifre (Tekrar)"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <View style={styles.formField}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="Kullanıcı Adı"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <Pressable style={styles.formButton} onPress={handleSignUp}>
            <Text style={styles.formButtonText}>Kayıt Ol</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#white",
  },
  header: {
    flex: 1,
    backgroundColor: colors.white,
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
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  loginText: {
    fontSize: 17,
    flex: 1,
    backgroundColor: "white",
  },
  formContainer: {
    flex: 6,
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  formField: {
    width: "100%",
    height: 50,
    backgroundColor: "#FBFBFD",
    borderColor: "#01243A",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    marginVertical: 10,
  },
  formInput: {
    flex: 1,
    padding: 10,
    borderRadius: 15,
    fontSize: 16,
    color: colors.paletteDarkBlue,
  },
  formButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#01243A",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  formButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
