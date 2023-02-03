import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    FlatList,
    Text,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
import animationScreens from "../data/animationScreens";
import Colors from "../constants/Colors";

const BaseScreen = (props) => {
    const visitAnimationScreen = (url) => {
        props.navigation.navigate(url);
    };

    return (
        <View
            style={[styles.container, { backgroundColor: Colors.background }]}
        >
            <FlatGrid
                // onScroll={scrollHandler}
                // ref={blogs}
                enableEmptySections={true}
                data={animationScreens}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <View style={styles.flatlistInner}>
                        <View
                            style={[
                                styles.buttonContainer,
                                { backgroundColor: itemData.item.color },
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() => {
                                    visitAnimationScreen(itemData.item.url);
                                }}
                            >
                                <View style={{}}>
                                    <Text style={styles.buttonText}>
                                        {itemData.item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
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
