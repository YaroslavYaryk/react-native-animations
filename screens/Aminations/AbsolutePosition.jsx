import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const AbsolutePositionScreen = () => {
    const animation = new Animated.Value(0);
    const animatedStyles = {
        top: animation,
        left: animation,
        right: animation,
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: animation._value == 0 ? 50 : 0,
            duration: 500,
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
                <Animated.View style={[styles.box, animatedStyles]}>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate incidunt praesentium ut facere maiores
                        aliquid sit dolores.
                    </Text>
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
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        // width: 150,
        height: 150,
        backgroundColor: "tomato",
    },
});

export default AbsolutePositionScreen;
