import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import GlobalProvider from "@/lib/global-provider";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "NotoSans-Bold": require("../assets/fonts/NotoSans-Bold.ttf"),
    "NotoSans-ExtraBold": require("../assets/fonts/NotoSans-ExtraBold.ttf"),
    "NotoSans-Light": require("../assets/fonts/NotoSans-Light.ttf"),
    "NotoSans-Medium": require("../assets/fonts/NotoSans-Medium.ttf"),
    "NotoSans-Regular": require("../assets/fonts/NotoSans-Regular.ttf"),
    "NotoSans-SemiBold": require("../assets/fonts/NotoSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
}
