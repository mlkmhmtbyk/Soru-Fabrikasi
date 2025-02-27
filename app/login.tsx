import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { colors } from "@/constants/palette";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { login, loginWithGoogle } from "@/lib/appwrite";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { login as loginOperation } from "@/redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.currentUser);

  const [signUpFormData, setSignUpFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const openSignUp = async () => {
    router.push("/sign-up");
  };

  async function handleDeneme() {
    console.log("user", user);
  }

  async function handleLogin() {
    console.log("email", signUpFormData.email);
    console.log("password", signUpFormData.password);
    const result = await dispatch(
      loginOperation({
        email: signUpFormData.email,
        password: signUpFormData.password,
      })
    );
    console.log("Login result", result);
    if (result) {
      console.log("Login success");
      router.push("/home");
    } else {
      Alert.alert("Error", "Failed to Login");
    }
  }

  async function handleLoginWithGoogle() {
    const result = await loginWithGoogle();

    if (result) {
      console.log("Login success");
    } else {
      Alert.alert("Error", "Failed to Login");
    }
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
              <TouchableOpacity onPress={openSignUp}>
                <Text style={styles.signUpText}>Kayıt Ol</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: colors.white }}></View>
        <View style={styles.formContainer}>
          <View style={styles.formField}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="E-mail"
              placeholderTextColor="#01243A"
              autoComplete="email"
              importantForAutofill="yes"
              autoFocus={false}
              onChangeText={(text) => {
                setSignUpFormData((prev) => ({
                  ...prev,
                  email: text,
                }));
              }}
            />
          </View>
          <View style={styles.passwordField}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="Şifre"
              secureTextEntry={!showPassword}
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setSignUpFormData((prev) => ({
                  ...prev,
                  password: text,
                }));
              }}
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={17}
              color="#01243A"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
          <Pressable style={styles.formButton} onPress={handleLogin}>
            <Text style={styles.formButtonText}>Giriş Yap</Text>
          </Pressable>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3, backgroundColor: "white" }}></View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

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
  signUpText: {
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
  passwordField: {
    width: "100%",
    height: 50,
    backgroundColor: "#FBFBFD",
    borderColor: "#01243A",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  loginWithGoogle: {
    width: "100%",
    height: 50,
    backgroundColor: "#01243A",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
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
  forgotPasswordText: {
    color: colors.paletteDarkBlue,
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
