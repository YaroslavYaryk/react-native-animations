import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const ExtrapolateScreen = () => {
    const animation = new Animated.Value(1);

    //extend: Default
    //clamp: Whatever the end values we've defined are the values they will stay at, never go beyond
    //identity: Takes on the value of the Animated.Value that you're passing in and ignores inputRange/outputRange

    const animationInterpolate = animation.interpolate({
        inputRange: [1, 2],
        outputRange: [1, 2],
        // extrapolate: "identity",
        // extrapolate: "clamp",
        // extrapolateLeft: "clamp",
        // extrapolateRight: "clamp",
    });

    const animatedStyles = {
        transform: [
            {
                scale: animationInterpolate,
                // scaleX: animation, //scale horizontally
                // scaleY: animation, //scale vertically
            },
        ],
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 2,
            // toValue: 3,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            // this works when animation is completed, we set animation back to 0
            Animated.timing(animation, {
                toValue: 1,
                // toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        });
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
        width: 150,
        height: 150,
        backgroundColor: "tomato",
    },
});

export default ExtrapolateScreen;
