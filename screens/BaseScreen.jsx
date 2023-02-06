import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    FlatList,
    Text,
    ScrollView,
    ScrollViewBase,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import animationScreens from "../data/animationScreens";
import realWorldAnimations from "../data/realWorldAnimations";
import Colors from "../constants/Colors";

const BaseScreen = (props) => {
    const visitAnimationScreen = (url) => {
        props.navigation.navigate(url);
    };

    return (
        <View
            style={[styles.container, { backgroundColor: Colors.background }]}
        >
            <ScrollView>
                <View>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            padding: 7,
                        }}
                    >
                        {animationScreens.map((item) => {
                            return (
                                <View
                                    key={item.id}
                                    style={[
                                        styles.flatlistInner,
                                        { width: "50%", padding: 5 },
                                    ]}
                                >
                                    <View
                                        style={[
                                            styles.buttonContainer,
                                            {
                                                backgroundColor: item.color,
                                            },
                                        ]}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                visitAnimationScreen(item.url);
                                            }}
                                        >
                                            <View style={{}}>
                                                <Text style={styles.buttonText}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <View>
                        {realWorldAnimations.map((item) => {
                            return (
                                <View
                                    style={styles.flatlistInner}
                                    key={item.id}
                                >
                                    <View
                                        style={[
                                            styles.buttonContainer,
                                            {
                                                backgroundColor: item.color,
                                                marginBottom: 10,
                                            },
                                        ]}
                                    >
                                        <TouchableOpacity
                                            onPress={() => {
                                                visitAnimationScreen(item.url);
                                            }}
                                        >
                                            <View style={{}}>
                                                <Text style={styles.buttonText}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",

        padding: 10,
    },
    flatlistInner: {},
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        borderWidth: 0.5,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText: {
        fontWeight: "500",
        fontSize: 18,
    },
});

export default BaseScreen;
