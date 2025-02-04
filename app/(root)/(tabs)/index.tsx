import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-rubik text-3xl ">Home Screen</Text>
      <Link href="/sign-in">Giriş yap</Link>
      <Link href="/sign-up">Kayıt ol</Link>
      <Link href="/onboarding">Onboarding</Link>
    </View>
  );
}
