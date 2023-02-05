import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Animated,
    PanResponder,
    TouchableWithoutFeedback,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import clamp from "clamp";

import Image1 from "../../assets/images/1.jpg";
import Image2 from "../../assets/images/2.jpg";
import Image3 from "../../assets/images/3.png";
import Image4 from "../../assets/images/4.jpg";
import Image5 from "../../assets/images/5.jpg";
import Image6 from "../../assets/images/6.jpeg";
import Image7 from "../../assets/images/7.jpg";
import Image8 from "../../assets/images/8.jpg";

const SWIPE_THRESHOLD = 120;
const { height } = Dimensions.get("window");

const SwipingCardsScreen = () => {
    const images = [
        {
            image: Image1,
            id: 1,
            text: "first image",
        },
        {
            image: Image2,
            id: 2,
            text: "second image",
        },
        {
            image: Image3,
            id: 3,
            text: "third image",
        },
        {
            image: Image4,
            id: 4,
            text: "forth image",
        },
        {
            image: Image5,
            id: 5,
            text: "fifth image",
        },
        {
            image: Image6,
            id: 6,
            text: "sixth image",
        },
        {
            image: Image7,
            id: 7,
            text: "seventh image",
        },
        {
            image: Image8,
            id: 8,
            text: "eighth image",
        },
    ];

    const [items, setItems] = useState(images);

    const animation = new Animated.ValueXY();
    const opacity = new Animated.Value(1);
    const next = new Animated.Value(0.9);

    var panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event(
            [
                null,
                {
                    dx: animation.x,
                    dy: animation.y,
                },
            ],
            { useNativeDriver: false }
        ),
        onPanResponderRelease: (e, { dx, vx, vy }) => {
            let velocity;

            if (velocity >= 0) {
                velocity = clamp(vx, 3, 5);
            } else {
                velocity = clamp(Math.abs(vx), 3, 5) * -1;
            }

            if (Math.abs(dx) > SWIPE_THRESHOLD) {
                Animated.decay(animation, {
                    velocity: {
                        x: velocity,
                        y: vy,
                    },
                    deceleration: 0.5,
                    useNativeDriver: false,
                }).start(transitionNext);
            } else {
                Animated.spring(animation, {
                    toValue: { x: 0, y: 0 },
                    friction: 4,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    const transitionNext = () => {
        Animated.parallel([
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.spring(next, {
                toValue: 1,
                friction: 4,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setItems((state) => {
                next.setValue(0.9);
                opacity.setValue(1);
                animation.setValue({ x: 0, y: 0 });
                return state.slice(1);
            });
        });
    };

    const rotateInterpolation = animation.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: ["-30deg", "0deg", "30deg"],
        extrapolate: "clamp",
    });

    const opacityInterpolation = animation.x.interpolate({
        inputRange: [-200, 0, 200],
        outputRange: [0.5, 1, 0.5],
        extrapolate: "clamp",
    });

    const animatedCardStyles = {
        transform: [
            { rotate: rotateInterpolation },
            ...animation.getTranslateTransform(),
        ],
        opacity: opacity,
    };

    const animatedImageStyles = {
        opacityInterpolation,
    };

    const yesOpacity = animation.x.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
    });
    const yesScale = animation.x.interpolate({
        inputRange: [0, 150],
        outputRange: [0.5, 1],
        extrapolate: "clamp",
    });
    const animatedYupStyles = {
        transform: [{ scale: yesScale }, { rotate: "-30deg" }],
        opacity: yesOpacity,
    };

    const noOpacity = animation.x.interpolate({
        inputRange: [-150, 0],
        outputRange: [1, 0],
    });
    const noScale = animation.x.interpolate({
        inputRange: [-150, 0],
        outputRange: [1, 0.5],
        extrapolate: "clamp",
    });
    const animatedNopeStyles = {
        transform: [{ scale: noScale }, { rotate: "30deg" }],
        opacity: noOpacity,
    };

    const handleYes = () => {
        Animated.timing(animation.x, {
            toValue: SWIPE_THRESHOLD,
            useNativeDriver: false,
        }).start(transitionNext);
    };
    const handleNo = () => {
        Animated.timing(animation.x, {
            toValue: -SWIPE_THRESHOLD,
            useNativeDriver: false,
        }).start(transitionNext);
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                {items
                    .slice(0, 2)
                    .reverse()
                    .map(({ image, id, text }, index, items) => {
                        const isLastItem = index === items.length - 1;
                        const isSecondToLast = index === items.length - 2;
                        const panHandlers = isLastItem
                            ? panResponder.panHandlers
                            : {};
                        const cardStyle = isLastItem
                            ? animatedCardStyles
                            : undefined;
                        const imageStyle = isLastItem
                            ? animatedImageStyles
                            : undefined;
                        const nextStyle = isSecondToLast
                            ? { transform: [{ scale: next }] }
                            : undefined;

                        return (
                            <Animated.View
                                {...panHandlers}
                                style={[styles.card, cardStyle, nextStyle]}
                                key={id}
                            >
                                <Animated.Image
                                    source={image}
                                    style={[styles.image, imageStyle]}
                                    resizeMode="cover"
                                />
                                <View style={styles.lowerText}>
                                    <Text>{text}</Text>
                                </View>
                                {isLastItem && (
                                    <Animated.View
                                        style={[
                                            styles.nope,
                                            animatedNopeStyles,
                                        ]}
                                    >
                                        <Text style={styles.nopeText}>
                                            Nope!
                                        </Text>
                                    </Animated.View>
                                )}

                                {isLastItem && (
                                    <Animated.View
                                        style={[styles.yup, animatedYupStyles]}
                                    >
                                        <Text style={styles.yupText}>Yup!</Text>
                                    </Animated.View>
                                )}
                            </Animated.View>
                        );
                    })}
            </View>
            <View style={styles.buttonBar}>
                <TouchableOpacity
                    onPress={handleNo}
                    style={[styles.button, styles.nopeButton]}
                >
                    <Text style={styles.nopeText}>NO</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleYes}
                    style={[styles.button, styles.yupButton]}
                >
                    <Text style={styles.yupText}>YES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonBar: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
    },
    button: {
        marginHorizontal: 10,
        padding: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.3,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 5,
    },
    yupButton: {
        shadowColor: "green",
    },
    nopeButton: {
        shadowColor: "red",
    },

    card: {
        width: 300,
        height: 300,
        position: "absolute",
        borderRadius: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { x: 0, y: 0 },
        shadowRadius: 5,
        borderWidth: 1,
        borderColor: "#FFF",
    },
    lowerText: {
        flex: 1,
        backgroundColor: "#FFF",
        padding: 5,
    },
    image: {
        width: null,
        height: null,
        borderRadius: 2,
        flex: 3,
    },
    yup: {
        borderColor: "green",
        borderWidth: 2,
        position: "absolute",
        padding: 20,
        borderRadius: 5,
        top: 20,
        left: 20,
        backgroundColor: "#FFF",
    },
    yupText: {
        fontSize: 16,
        color: "green",
    },
    nope: {
        borderColor: "red",
        borderWidth: 2,
        position: "absolute",
        padding: 20,
        borderRadius: 5,
        right: 20,
        top: 20,
        backgroundColor: "#FFF",
    },
    nopeText: {
        fontSize: 16,
        color: "red",
    },
});

export default SwipingCardsScreen;
