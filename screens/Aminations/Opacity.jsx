import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Animated,
    TouchableWithoutFeedback,
} from "react-native";

const OpacityScreen = () => {
    const animation = new Animated.Value(1);

    const animatedStyles = {
        opacity: animation,
    };

    const startAnimation = () => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
        }).start(() => {
            // this works when animation is completed, we set animation back to 1
            Animated.timing(animation, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        });
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={startAnimation}>
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

export default OpacityScreen;
