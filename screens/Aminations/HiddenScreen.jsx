import React, { Component, useState } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const HiddenScreen = () => {
    const animation = new Animated.Value(0);
    const [visible, setVisible] = useState(true);

    const translateYInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 500],
    });

    const opacityInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    });

    const animatedStyles = {
        opacity: opacityInterpolation,
        transform: [
            {
                translateY: translateYInterpolate,
            },
        ],
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
        }).start(({ finished }) => {
            setTimeout(() => {
                if (finished) {
                    setVisible(false);
                } else {
                    Animated.spring(animation, {
                        toValue: 0,
                        useNativeDriver: false,
                    }).start();
                }
            }, 0);
        });
    };

    return (
        <View style={styles.container}>
            {visible && (
                <TouchableWithoutFeedback onPress={startAnimation}>
                    <Animated.View style={[styles.box, animatedStyles]} />
                </TouchableWithoutFeedback>
            )}
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

export default HiddenScreen;
