import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const home = () => {
  const user = useSelector((state: RootState) => state.auth.currentUser);
  return (
    <View>
      <Text>
        Current User: {user ? JSON.stringify(user) : "No user logged in"}
      </Text>
    </View>
  );
};

export default home;
