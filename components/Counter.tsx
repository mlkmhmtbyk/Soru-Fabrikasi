import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "@/redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <h2>{count}</h2>
      <TouchableOpacity onPress={() => dispatch(incrementAsync(10))}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;
