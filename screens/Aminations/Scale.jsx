import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const ScaleScreen = () => {
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
        Animated.timing(animation, {
            toValue: 2,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            // this works when animation is completed, we set animation back to 0
            Animated.timing(animation, {
                toValue: 1,
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

export default ScaleScreen;
