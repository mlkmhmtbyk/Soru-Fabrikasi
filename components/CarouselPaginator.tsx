import { View, Animated, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";

interface CarouselData {
  // Add properties that match the shape of your data
  id: string;
  title: string;
  description: string;
  image: any;
}

const CarouselPaginator = ({
  data,
  scrollX,
}: {
  data: CarouselData[];
  scrollX: any;
}) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default CarouselPaginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#01243A",
    marginHorizontal: 8,
    alignItems: "center",
  },
});
