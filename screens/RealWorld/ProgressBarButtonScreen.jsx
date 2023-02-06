import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const ProgressBarButonScreen = () => {
    const animation = new Animated.Value(0);
    const opacity = new Animated.Value(1);

    const progressInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp ",
    });

    const colorInpterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(71,255,99)", "rgb(99,71,255)"],
    });

    const progressStyle = {
        //for horisontal progress
        width: progressInterpolation,
        bottom: 0,
        height: 5, //for progress not to take all button height
        top: null, // for progres to take plate in the bottom of button not in top

        // //for vertical progress
        // height: progressInterpolation,
        // right: 0,

        backgroundColor: colorInpterpolation,
        opacity: opacity,
    };

    const handlePress = () => {
        animation.setValue(0);
        opacity.setValue(1);
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
        }).start(({ finished }) => {
            if (finished) {
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }).start();
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <View style={styles.button}>
                    <View style={[StyleSheet.absoluteFill]}>
                        <Animated.View
                            style={[
                                styles.progress,
                                progressStyle,
                                styles.opacityBackground,
                            ]}
                        />
                    </View>
                    <Text style={styles.buttonText}>Get it!</Text>
                </View>
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
    button: {
        backgroundColor: "#e6537d",
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 60,
        paddingVertical: 10,
        overflow: "hidden",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24,
        backgroundColor: "transparent",
    },
    progress: {
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: 2,
    },
    opacityBackground: {
        // backgroundColor: "rgba(255,255,255,.5)",
    },
});

export default ProgressBarButonScreen;
