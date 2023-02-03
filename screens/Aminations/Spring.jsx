import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const SpringScreen = () => {
    const animation = new Animated.Value(1);
    const animatedStyles = {
        transform: [
            {
                scale: animation,
                // scaleX: animation, //scale horizontally
                // scaleY: animation, //scale vertically
            },
        ],
    };

    const startAnimation = () => {
        console.log(animation._value, "here");
        Animated.spring(animation, {
            toValue: animation._value == 1 ? 2 : 1,
            useNativeDriver: true,
            friction: 2,
            // tension: 160,
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

export default SpringScreen;
