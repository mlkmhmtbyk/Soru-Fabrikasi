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
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { colors } from "../constants/palette";
import {
  signUp,
  logout as appwriteLogout,
  getCurrentUser,
  getCurrentSession,
  getUser,
} from "@/lib/appwrite";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { login, logout } from "../redux/slices/authSlice";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.auth.currentUser);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    username: "",
  });

  const openLogin = async () => {
    router.push("/login");
  };

  async function handleSignUp() {
    //email verification eklenecek
    //signup fail ler handle edilecek
    console.log(formData);
    if (formData.password !== formData.password2) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const result = await signUp(
      formData.email,
      formData.password,
      formData.username
    );

    if (result) {
      console.log("Signup success");
      router.push("/login");
    } else {
      Alert.alert("Error", "Failed to Sign up");
    }
  }

  async function handleLogin() {
    const result = await dispatch(
      login({ email: "Denemebethov@gmail.com", password: "12345678" })
    );
    if (result) {
      console.log("Login success");
    } else {
      Alert.alert("Error", "Failed to Login");
    }
  }

  async function handleLogout() {
    const result = await dispatch(logout());
    console.log("isLoggedIn:", user?.avatar);

    if (result) {
      console.log("Logout success");
    } else {
      Alert.alert("Error", "Failed to Logout");
    }
  }
  async function handleGetCurrentUser() {
    const result = await getCurrentSession();

    if (result) {
      console.log("get Current user success");
    } else {
      Alert.alert("Error", "Failed to get current user");
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
                setFormData({ ...formData, password: text });
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
                setFormData({ ...formData, password2: text });
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
                setFormData({ ...formData, username: text });
              }}
            />
          </View>
          <Pressable style={styles.formButton} onPress={handleSignUp}>
            <Text style={styles.formButtonText}>Kayıt Ol</Text>
          </Pressable>
          <Pressable style={styles.formButton} onPress={handleLogin}>
            <Text style={styles.formButtonText}>Login Deneme</Text>
          </Pressable>
          <Pressable style={styles.formButton} onPress={handleLogout}>
            <Text style={styles.formButtonText}>Log Out Deneme</Text>
          </Pressable>
          <Pressable style={styles.formButton} onPress={handleGetCurrentUser}>
            <Text style={styles.formButtonText}>GetCurrentUser</Text>
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
