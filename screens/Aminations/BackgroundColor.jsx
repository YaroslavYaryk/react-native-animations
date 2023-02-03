import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const BackgroundColorScreen = () => {
    const animation = new Animated.Value(0);
    const boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
    });

    const colorInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(99,71,255)", "rgb(255,99,71)"],
    });

    const boxAnimatedStyles = {
        backgroundColor: boxInterpolation,
    };

    const textAnimatedStyles = {
        color: colorInterpolation,
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: animation._value == 0 ? 1 : 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
                <Animated.View style={[styles.box, boxAnimatedStyles]}>
                    <Animated.Text style={textAnimatedStyles}>
                        Hello Animation!
                    </Animated.Text>
                </Animated.View>
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
        alignItems: "center",
        justifyContent: "center",
    },
});

export default BackgroundColorScreen;
