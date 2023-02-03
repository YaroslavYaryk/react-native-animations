import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableWithoutFeedback,
    ScrollView,
} from "react-native";

const EventScreen = () => {
    const animation = new Animated.Value(0);
    const backgroundInterpolate = animation.interpolate({
        inputRange: [0, 2000],
        outputRange: ["rgb(255,99,71)", "rgb(99,71,255)"],
    });
    const backgroundStyle = {
        backgroundColor: backgroundInterpolate,
    };

    return (
        <View style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={(e) => {
                    Animated.event(
                        animation.setValue(e.nativeEvent.contentOffset.y),
                        { useNativeDriver: true }
                        // [
                        //     {
                        //         nativeEvent: {
                        //             contentOffset: {
                        //                 y: animation,
                        //             },
                        //         },
                        //     },
                        // ],
                        // { useNativeDriver: false }
                    );
                }}
            >
                <Animated.View style={[styles.content, backgroundStyle]} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        height: 3000,
    },
});

export default EventScreen;
