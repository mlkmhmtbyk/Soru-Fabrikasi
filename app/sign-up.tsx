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

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
        <View style={styles.formContainer}>
          <View style={styles.formFeild}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="Email"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <View style={styles.formFeild}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="şifre"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <View style={styles.formFeild}>
            <TextInput
              className="bg-accent-100"
              style={styles.formInput}
              placeholder="şifre*"
              placeholderTextColor="#01243A"
              onChangeText={(text) => {
                setFormData({ ...formData, email: text });
              }}
            />
          </View>
          <View style={styles.formFeild}>
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
          <Pressable style={styles.formButton} onPress={handleSubmit}>
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
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formFeild: {
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
    color: "#01243A",
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
  recoverBtn: {
    marginVertical: 30,
    fontWeight: "bold",
  },
});
