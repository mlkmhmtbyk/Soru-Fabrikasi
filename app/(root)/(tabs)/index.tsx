import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
      }}
    >
      <Text className="text-base text-center uppercase font-rubik text-black-200">
        Welcome to ReState
      </Text>
      <Link href="/sign-in">Giriş yap</Link>
      <Link href="/sign-up">Kayıt ol</Link>
      <Link href="../onboarding">Onboarding</Link>
    </View>
  );
}
