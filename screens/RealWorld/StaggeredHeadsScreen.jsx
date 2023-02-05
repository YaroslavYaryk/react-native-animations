import React, { useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    PanResponder,
} from "react-native";

import Me from "../../assets/me.jpeg";

const StaggeredHeadsScreen = () => {
    const heads = [
        {
            image: Me,
            animation: new Animated.ValueXY(),
            text: "Drag Me",
        },
        {
            image: Me,
            animation: new Animated.ValueXY(),
        },
        {
            image: Me,
            animation: new Animated.ValueXY(),
        },
        {
            image: Me,
            animation: new Animated.ValueXY(),
        },
    ];

    var _panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            heads.map(({ animation }) => {
                animation.extractOffset();
                // setValue Animated bug fix
                animation.setValue({ x: 0, y: 0 });
            });
        },
        onPanResponderMove: (e, { dx, dy }) => {
            heads[0].animation.setValue({
                x: dx,
                y: dy,
            });

            const animations = heads.slice(1).map(({ animation }, index) => {
                return Animated.sequence([
                    Animated.delay(index * 10),
                    Animated.spring(animation, {
                        toValue: { x: dx, y: dy },
                        useNativeDriver: false,
                    }),
                ]).start();
            });
        },
    });
    return (
        <View style={styles.container}>
            {heads
                .slice(0)
                .reverse()
                .map((item, index, items) => {
                    const pan =
                        index === items.length - 1
                            ? _panResponder.panHandlers
                            : {};

                    return (
                        <Animated.View
                            {...pan}
                            key={index}
                            style={[
                                styles.wrap,
                                {
                                    transform:
                                        item.animation.getTranslateTransform(),
                                },
                            ]}
                        >
                            <Image source={item.image} style={styles.head} />
                            <Text>{item.text}</Text>
                        </Animated.View>
                    );
                })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    wrap: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
    },
    head: {
        width: 80,
        height: 80,
        borderRadius: 40,
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
});

export default StaggeredHeadsScreen;
