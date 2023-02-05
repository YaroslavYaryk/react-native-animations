import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const SequenceScreen = () => {
    const animation = new Animated.Value(0);
    const animationColor = new Animated.Value(0);

    const rotateInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const backgroundInterpolation = animationColor.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
    });

    const animatedStyles = {
        transform: [
            {
                rotate: rotateInterpolation,
                // rotateX: rotateInterpolation, //rotate horizontally
                // rotateY: rotateInterpolation, //rotate vertically
            },
        ],
        backgroundColor: backgroundInterpolation,
    };

    const startAnimation = () => {
        Animated.sequence([
            Animated.timing(animationColor, {
                toValue: animationColor._value == 0 ? 1 : 0,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(animation, {
                toValue: animation._value == 0 ? 1 : 0,
                duration: 500,
                useNativeDriver: false,
            }),
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
        width: 150,
        height: 150,
        backgroundColor: "tomato",
    },
});

export default SequenceScreen;
