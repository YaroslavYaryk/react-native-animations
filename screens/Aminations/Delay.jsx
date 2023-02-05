import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const DelayScreen = () => {
    const animationTop = new Animated.Value(10);
    const animationLeft = new Animated.Value(10);
    const animationColor = new Animated.Value(0);

    const backgroundInterpolation = animationColor.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
    });

    const animatedStyles = {
        top: animationTop,
        left: animationLeft,
        backgroundColor: backgroundInterpolation,
    };

    const startAnimation = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(animationColor, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(animationLeft, {
                    toValue: 235,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ]),
            Animated.delay(500), //it waits 1500 ms to start next animations
            Animated.parallel([
                Animated.timing(animationColor, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(animationTop, {
                    toValue: 560,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ]),
            Animated.delay(500), //it waits 1500 ms to start next animations
            Animated.parallel([
                Animated.timing(animationColor, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(animationLeft, {
                    toValue: 10,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ]),
            Animated.delay(500), //it waits 1500 ms to start next animations
            Animated.parallel([
                Animated.timing(animationColor, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: false,
                }),
                Animated.timing(animationTop, {
                    toValue: 10,
                    duration: 500,
                    useNativeDriver: false,
                }),
            ]),
        ]).start();
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {
                    startAnimation();
                }}
            >
                <Animated.View style={[styles.box, animatedStyles]} />
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        position: "absolute",
        // top: 10,
        // left: 10,
        width: 150,
        height: 150,
        backgroundColor: "tomato",
    },
});

export default DelayScreen;
