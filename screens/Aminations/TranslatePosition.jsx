import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
    Easing,
} from "react-native";

const TranslatePositionScreen = () => {
    const animationY = new Animated.Value(1);
    const animationX = new Animated.Value(1);

    const animatedStyles = {
        transform: [
            {
                translateY: animationY, //animation by Y
                // translateX: animationX, //animation by X
            },
        ],
    };

    const startAnimation = (animation) => {
        Animated.timing(animation, {
            toValue: 200,
            duration: 500,
            useNativeDriver: true,
            // easing: Easing.back(5),
            // easing: Easing.bounce,
            // easing: Easing.elastic(2),
            easing: Easing.bezier(0.06, 1, 0.08, 0.23),
        }).start();
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
                onPress={() => {
                    startAnimation(animationY);
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

export default TranslatePositionScreen;
