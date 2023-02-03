import {
    StyleSheet,
    View,
    Animated,
    TouchableOpacity,
    FlatList,
    Text,
} from "react-native";
import animationScreens from "../data/animationScreens";
import Colors from "../constants/Colors";

const BaseScreen = () => {
    return (
        <View
            style={[styles.container, { backgroundColor: Colors.background }]}
        >
            <FlatList
                // onScroll={scrollHandler}
                // ref={blogs}
                enableEmptySections={true}
                data={animationScreens}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => (
                    <View style={styles.flatlistInner}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => {}}>
                                <View>
                                    <Text>{itemData.item.name}</Text>
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
    flatlistInner: { width: "50%", borderWidth: 1 },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});

export default BaseScreen;
