import {
  FlatList,
  Animated,
  ViewToken,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import onboardingSlides from "../constants/onboardingSlides";
import CarouselItem from "./CarouselItem";
import CarouselPaginator from "@/components/CarouselPaginator";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onboardingSlidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    (info: {
      viewableItems:
        | ViewToken<{
            id: string;
            title: string;
            description: string;
            image: any;
          }>[]
        | undefined;
      changed:
        | ViewToken<{
            id: string;
            title: string;
            description: string;
            image: any;
          }>[]
        | undefined;
    }) => {
      if (info.viewableItems) {
        info.viewableItems.forEach((item) => {
          if (item.isViewable && item.index !== null) {
            setCurrentIndex(item.index);
          }
        });
      }
    }
  ).current;

  return (
    <SafeAreaView className="flex flex-1 w-full h-full justify-center items-center">
      <FlatList
        data={onboardingSlides}
        renderItem={({ item }) => <CarouselItem item={item} />}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        scrollEventThrottle={32}
        ref={onboardingSlidesRef}
      />
      <CarouselPaginator data={onboardingSlides} scrollX={scrollX} />
    </SafeAreaView>
  );
};

export default Carousel;
