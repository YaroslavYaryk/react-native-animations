import React, { useEffect, useState, useRef } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Animated,
    KeyboardAvoidingView,
    ImageBackground,
} from "react-native";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

import Background from "../../assets/images/background.jpg";

const LoginScreen = () => {
    const email = new Animated.Value(0);
    const password = new Animated.Value(0);
    const button = new Animated.Value(0);

    const createAnimationStyle = (animation) => {
        const translateY = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [-5, 0],
        });
        return {
            opacity: animation,
            transform: [
                {
                    translateY: translateY,
                },
            ],
        };
    };

    const emailStyle = createAnimationStyle(email);
    const passwordStyle = createAnimationStyle(password);
    const buttonStyle = createAnimationStyle(button);

    var emailRef = new useRef();

    useEffect(() => {
        Animated.stagger(100, [
            Animated.timing(email, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(password, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(button, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Background}
                resizeMode="cover"
                style={[styles.absoluteFill, {}]}
            >
                <View style={styles.container} />
                <KeyboardAvoidingView style={styles.form} behavior="padding">
                    <View style={styles.container}>
                        <Text style={styles.title}>Login</Text>
                        <AnimatedTextInput
                            ref={(email) => (emailRef = email)}
                            style={[styles.input, emailStyle]}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                        <AnimatedTextInput
                            placeholder="Password"
                            style={[styles.input, passwordStyle]}
                            secureTextEntry
                        />
                        <TouchableOpacity>
                            <Animated.View style={[styles.button, buttonStyle]}>
                                <Text style={styles.buttonText}>Login</Text>
                            </Animated.View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.container} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    absoluteFill: {
        flex: 1,
    },
    title: {
        fontSize: 30,
        color: "#FFF",
        backgroundColor: "transparent",
        textAlign: "center",
        marginBottom: 10,
    },
    form: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,.25)",
        paddingVertical: 10,
    },
    input: {
        width: 250,
        height: 35,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#FFF",
        color: "#333",
        backgroundColor: "#FFF",
    },
    button: {
        marginTop: 10,
        backgroundColor: "tomato",
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
    },
});

export default LoginScreen;
