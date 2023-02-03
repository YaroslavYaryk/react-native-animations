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

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this.startAnimation}>
                <Animated.View style={[styles.box, animatedStyles]} />
            </TouchableWithoutFeedback>
        </View>
    );
};

export default OpacityScreen;
