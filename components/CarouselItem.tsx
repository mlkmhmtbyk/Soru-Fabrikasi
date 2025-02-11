import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";

interface CarouselItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    image: any;
  };
}

const CarouselItem = ({ item }: CarouselItemProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[
          styles.image,
          { width, height: width * 1, resizeMode: "contain" },
        ]}
      />
      <View style={{ flex: 0.6 }}>
        <Text
          className={"text-3xl font-notoSans-extrabold text-paletteDarkBlue"}
          style={styles.title}
        >
          {item.title}
        </Text>
        <Text
          className={"text-xl font-notoSans text-paletteDarkBlue"}
          style={styles.description}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  description: {
    fontWeight: "300",
    textAlign: "center",
    paddingHorizontal: 64,
    paddingVertical: 10,
  },
});
