import React, { useCallback, useState } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    Animated,
} from "react-native";

const BouncingHeartScreen = () => {
    const [liked, setLiked] = useState(false);

    const animation = new Animated.Value(0);

    const handlePressLike = () => {
        const toValue = liked ? 0 : 1;
        Animated.spring(animation, {
            toValue,
            // duration: 300,
            friction: 10,
            useNativeDriver: false,
        }).start(() => {
            setLiked(!liked);
        });
        console.log(animation);
    };
    console.log(liked);

    const colorInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#000", "#e31745"],
        extrapolate: "clamp",
    });
    const scaleInterpolation = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.1, 1],
        extrapolate: "clamp",
    });

    const heartStyle = {
        backgroundColor: colorInterpolation,
        transform: [
            {
                scale: scaleInterpolation,
            },
        ],
    };
    return (
        <View style={[styles.container]}>
            <TouchableOpacity
                onPress={() => {
                    handlePressLike();
                }}
            >
                <Animated.View
                    style={[styles.heart, heartStyle]}
                ></Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    explodeHeart: {
        left: 0,
        top: 0,
        position: "absolute",
    },
    heart: {
        width: 50,
        height: 50,
        backgroundColor: "transparent",
    },
    heartShape: {
        width: 30,
        height: 45,
        position: "absolute",
        top: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    filledHeart: {
        backgroundColor: "#e31745",
    },
    fit: {
        transform: [{ scale: 0.9 }],
    },
    emptyFill: {
        backgroundColor: "#FFF",
    },
    empty: {
        backgroundColor: "#ccc",
    },
    leftHeart: {
        transform: [{ rotate: "-45deg" }],
        left: 5,
    },
    rightHeart: {
        transform: [{ rotate: "45deg" }],
        right: 5,
    },
});

export default BouncingHeartScreen;
