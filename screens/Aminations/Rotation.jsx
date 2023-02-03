import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const RotationScreen = () => {
    const animation = new Animated.Value(0);

    const rotateInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const animatedStyles = {
        transform: [
            {
                // rotate: rotateInterpolation,
                // rotateX: rotateInterpolation, //rotate horizontally
                rotateY: rotateInterpolation, //rotate vertically
            },
        ],
    };

    const startAnimation = () => {
        console.log(animation._value);
        Animated.timing(animation, {
            toValue: animation._value == 0 ? 1 : 0,
            duration: 1500,
            useNativeDriver: false,
        }).start();
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

export default RotationScreen;
