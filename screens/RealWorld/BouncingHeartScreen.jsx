import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
} from "react-native";

import Heart from "../../components/Heart";

const getTransformAnimation = (animation, scale, y, x, rotate, opacity) => {
    const scaleAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, scale],
    });
    const xAnimatoin = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, x],
    });

    const yAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, y],
    });

    const rotationAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", rotate],
    });

    const opacityAnimation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, opacity],
    });

    return {
        opacity: opacityAnimation,
        transform: [
            { scale: scaleAnimation },
            { translateX: xAnimatoin },
            { translateY: yAnimation },
            { rotate: rotationAnimation },
        ],
    };
};

export default class BouncingHeartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            scale: new Animated.Value(0),
            animations: [
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
                new Animated.Value(0),
            ],
        };
        this.triggerLike = this.triggerLike.bind(this);
    }
    triggerLike() {
        this.setState({
            liked: !this.state.liked,
        });

        Animated.spring(this.state.scale, {
            toValue: 2,
            friction: 3,
        }).start(() => {
            this.state.scale.setValue(0);
        });
    }
    render() {
        const bouncyHeart = this.state.scale.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, 0.8, 1],
        });
        const heartButtonStyle = {
            transform: [{ scale: bouncyHeart }],
        };

        return (
            <View style={styles.container}>
                <View>
                    <TouchableWithoutFeedback onPress={this.triggerLike}>
                        <Animated.View style={heartButtonStyle}>
                            <Heart filled={this.state.liked} />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    explodeHeart: {
        left: 0,
        top: 0,
        position: "absolute",
    },
});

AppRegistry.registerComponent("BouncingHeartScreen", () => BouncingHeartScreen);
