import React, { useState, useEffect } from "react";
import {
    createStackNavigator,
    HeaderBackButton,
} from "@react-navigation/stack";
import { Platform, SafeAreaView, Button, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import BaseScreen from "../screens/BaseScreen";
import OpacityScreen from "../screens/Aminations/Opacity";

const BaseStackNavigator = createStackNavigator();
import Colors from "../constants/Colors";

const screenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Colors.blogItemBackground,
    headerTitleStyle: {
        fontWeight: "700",
    },
    headerBackTitleStyle: {},
};

export const BaseNavigator = (props) => {
    return (
        <BaseStackNavigator.Navigator screenOptions={screenOptions}>
            <BaseStackNavigator.Screen
                name="BaseScreen"
                component={BaseScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="OpacityScreen"
                component={OpacityScreen}
                initialParams={{}}
            />
        </BaseStackNavigator.Navigator>
    );
};
