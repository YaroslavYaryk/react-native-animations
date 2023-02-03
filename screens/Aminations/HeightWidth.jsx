import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const HeightWidthScreen = () => {
    const animation = new Animated.Value(150);

    const animatedStyles = {
        width: animation,
        height: animation,
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 300,
            duration: 1500,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(animation, {
                toValue: 150,
                duration: 1500,
                useNativeDriver: false,
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
        width: 150,
        height: 150,
        backgroundColor: "tomato",
    },
});

export default HeightWidthScreen;
