import React, { Component } from "react";
import {
    AppRegistry,
    Button,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const AnimatedButton = Animated.createAnimatedComponent(Button);

const AnimatedComponentScreen = () => {
    const animation = new Animated.Value(0);

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        });
    };

    const animatedColor = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
    });

    return (
        <View style={styles.container}>
            <AnimatedButton
                title="Press Me"
                onPress={startAnimation}
                color={animatedColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default AnimatedComponentScreen;
