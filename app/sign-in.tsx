import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit() {
    console.log("Submit");
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require("../assets/images/favicon.png")}
        />
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
    </View>
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
    fontSize: 16,
    color: "grey",
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
