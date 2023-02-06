// import React, { Component, useCallback, useEffect, useState } from "react";
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Animated,
//     TouchableOpacity,
//     Dimensions,
// } from "react-native";

// const QuestionsScreen = () => {
//     const { width } = Dimensions.get("window");

//     const items = [
//         "Do you tend to follow directions when given?",
//         "Are you comfortable with the idea of standing and doing light physical activity most of the day?",
//         "Would you enjoy making sure your customers leave happy?",
//         "Are you willing to work nights and weekends (and possibly holidays)?",
//     ];

//     const [index, setIndex] = useState(0);
//     const [questions, setQuestions] = useState(items);

//     const animation = new Animated.Value(0);
//     const progress = new Animated.Value(0);

//     const nextQuestionInterpolate = animation.interpolate({
//         inputRange: [0, 1],
//         outputRange: [width, 0],
//     });

//     const mainQuestionInterpolate = animation.interpolate({
//         inputRange: [0, 1],
//         outputRange: [0, -width],
//     });

//     const progressInterpolate = progress.interpolate({
//         inputRange: [0, 1, 2, 3, 4],
//         outputRange: ["0%", "25%", "50%", "75%", "100%"],
//         extrapolate: "clamp",
//     });

//     const mainQuestionStyle = {
//         transform: [
//             {
//                 translateX: mainQuestionInterpolate,
//             },
//         ],
//     };

//     const nextQuestionStyle = {
//         transform: [
//             {
//                 translateX: nextQuestionInterpolate,
//             },
//         ],
//     };

//     const progressStyle = {
//         width: progressInterpolate,
//     };

//     const handleReset = () => {
//         animation.setValue(0);
//         progress.setValue(0);
//         setIndex(0);
//     };

//     const handlePress = () => {
//         console.log(progressInterpolate, index, "index");
//         Animated.parallel([
//             Animated.timing(progress, {
//                 toValue: index + 1,
//                 duration: 400,
//                 useNativeDriver: false,
//             }),
//             Animated.timing(animation, {
//                 toValue: 1,
//                 duration: 400,
//                 useNativeDriver: false,
//             }),
//         ]).start(() => {
//             console.log(progress, progressInterpolate, "here");
//             setIndex((state) => {
//                 animation.setValue(0);
//                 return state + 1;
//             });
//         });
//     };

//     const question = questions[index];
//     let nextQuestion;
//     if (index < questions.length) {
//         nextQuestion = questions[index + 1];
//     }

//     return (
//         <View style={styles.container}>
//             <View style={[styles.overlay, StyleSheet.absoluteFill]}>
//                 <Animated.Text style={[styles.questionText, mainQuestionStyle]}>
//                     {question}
//                 </Animated.Text>
//                 <Animated.Text style={[styles.questionText, nextQuestionStyle]}>
//                     {nextQuestion}
//                 </Animated.Text>
//             </View>

//             <View style={styles.progress}>
//                 <Animated.View style={[styles.bar, progressStyle]} />
//             </View>

//             <TouchableOpacity
//                 onPress={handlePress}
//                 style={styles.option}
//                 activeOpacity={0.7}
//             >
//                 <Text style={styles.optionText}>No</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 onPress={handlePress}
//                 style={[styles.option, styles.yes]}
//                 activeOpacity={0.7}
//             >
//                 <Text style={styles.optionText}>Yes</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.close} onPress={handleReset}>
//                 <Text style={styles.closeText}>X</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#E22D4B",
//         flexDirection: "row",
//     },
//     progress: {
//         position: "absolute",
//         left: 0,
//         bottom: 0,
//         right: 0,
//         height: 10,
//     },
//     bar: {
//         height: "100%",
//         backgroundColor: "#FFF",
//     },
//     overlay: {
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     questionText: {
//         fontSize: 30,
//         color: "#FFF",
//         textAlign: "center",
//         position: "absolute",
//     },
//     close: {
//         position: "absolute",
//         top: 30,
//         right: 30,
//         backgroundColor: "transparent",
//     },
//     closeText: {
//         fontSize: 30,
//         color: "#FFF",
//     },
//     option: {
//         flex: 1,
//         justifyContent: "flex-end",
//         alignItems: "center",
//     },
//     yes: {
//         backgroundColor: "rgba(255,255,255,.1)",
//     },
//     optionText: {
//         fontSize: 30,
//         color: "#FFF",
//         marginBottom: 50,
//     },
// });

// export default QuestionsScreen;

import React, { Component } from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableOpacity,
    Dimensions,
} from "react-native";

export default class QuestionsScreen extends Component {
    state = {
        index: 0,
        questions: [
            "Do you tend to follow directions when given?",
            "Are you comfortable with the idea of standing and doing light physical activity most of the day?",
            "Would you enjoy making sure your customers leave happy?",
            "Are you willing to work nights and weekends (and possibly holidays)?",
        ],
        animation: new Animated.Value(0),
        progress: new Animated.Value(0),
    };
    reset = () => {
        this.state.animation.setValue(0);
        this.state.progress.setValue(0);
        this.setState({
            index: 0,
        });
    };
    handleAnswer = () => {
        Animated.parallel([
            Animated.timing(this.state.progress, {
                toValue: this.state.index + 1,
                duration: 400,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 400,
                useNativeDriver: false,
            }),
        ]).start(() => {
            this.setState(
                (state) => {
                    return {
                        index: state.index + 1,
                    };
                },
                () => {
                    this.state.animation.setValue(0);
                }
            );
        });
    };

    render() {
        const { index, questions } = this.state;
        const { width } = Dimensions.get("window");

        const nextQuestionInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [width, 0],
        });

        const mainQuestionInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -width],
        });

        const progressInterpolate = this.state.progress.interpolate({
            inputRange: [0, questions.length],
            outputRange: ["0%", "100%"],
        });

        const progressStyle = {
            width: progressInterpolate,
        };

        const mainQuestionStyle = {
            transform: [
                {
                    translateX: mainQuestionInterpolate,
                },
            ],
        };

        const nextQuestionStyle = {
            transform: [
                {
                    translateX: nextQuestionInterpolate,
                },
            ],
        };

        const question = questions[index];
        let nextQuestion;
        if (index + 1 < questions.length) {
            nextQuestion = questions[index + 1];
        }

        return (
            <View style={styles.container}>
                <View style={[styles.overlay, StyleSheet.absoluteFill]}>
                    <Animated.Text
                        style={[styles.questionText, mainQuestionStyle]}
                    >
                        {question}
                    </Animated.Text>
                    <Animated.Text
                        style={[styles.questionText, nextQuestionStyle]}
                    >
                        {nextQuestion}
                    </Animated.Text>
                </View>

                <View style={styles.progress}>
                    <Animated.View style={[styles.bar, progressStyle]} />
                </View>

                <TouchableOpacity
                    onPress={this.handleAnswer}
                    style={styles.option}
                    activeOpacity={0.7}
                >
                    <Text style={styles.optionText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.handleAnswer}
                    style={[styles.option, styles.yes]}
                    activeOpacity={0.7}
                >
                    <Text style={styles.optionText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.close} onPress={this.reset}>
                    <Text style={styles.closeText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
// Add progress bar at bottom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E22D4B",
        flexDirection: "row",
    },
    progress: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        height: 10,
    },
    bar: {
        height: "100%",
        backgroundColor: "#FFF",
    },
    overlay: {
        alignItems: "center",
        justifyContent: "center",
    },
    questionText: {
        fontSize: 30,
        color: "#FFF",
        textAlign: "center",
        position: "absolute",
    },
    close: {
        position: "absolute",
        top: 30,
        right: 30,
        backgroundColor: "transparent",
    },
    closeText: {
        fontSize: 30,
        color: "#FFF",
    },
    option: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    yes: {
        backgroundColor: "rgba(255,255,255,.1)",
    },
    optionText: {
        fontSize: 30,
        color: "#FFF",
        marginBottom: 50,
    },
});

AppRegistry.registerComponent("QuestionsScreen", () => QuestionsScreen);
