import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const ProgressiveImage = (props: any) => {
  const thumbnailAnimated = useRef(new Animated.Value(0)).current;
  const imageAnimated = useRef(new Animated.Value(0)).current;

  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const { thumbnailSource, source, style } = props;
  console.log(props);

  return (
    <View style={styles.container}>
      <Animated.Image
        {...props}
        source={{ uri: thumbnailSource }}
        style={[
          style,
          { opacity: thumbnailAnimated, flex: 1, width: 150, height: 100 },
        ]}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        {...props}
        source={source}
        style={[
          styles.imageOverlay,
          { opacity: imageAnimated, flex: 1, width: 150, height: 100 },
          style,
        ]}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: "#e1e4e8",
  },
});

export default ProgressiveImage;
