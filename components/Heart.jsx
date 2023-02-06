import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Animated,
} from "react-native";

const Heart = ({ filled, style, heartStyles, ...props }) => {
    return (
        <Animated.View {...props} style={[styles.heart, style]}>
            <View style={[styles.leftHeart, styles.heartShape, heartStyles]} />
            <View style={[styles.rightHeart, styles.heartShape, heartStyles]} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
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

export default Heart;
