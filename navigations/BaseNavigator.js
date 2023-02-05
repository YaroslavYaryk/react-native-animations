import React, { useState, useEffect } from "react";
import {
    createStackNavigator,
    HeaderBackButton,
} from "@react-navigation/stack";
import { Platform, SafeAreaView, Button, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import BaseScreen from "../screens/BaseScreen";
import OpacityScreen from "../screens/Aminations/Opacity";
import TranslatePositionScreen from "../screens/Aminations/TranslatePosition";
import ScaleScreen from "../screens/Aminations/Scale";
import HeightWidthScreen from "../screens/Aminations/HeightWidth";
import AbsolutePositionScreen from "../screens/Aminations/AbsolutePosition";
import BackgroundColorScreen from "../screens/Aminations/BackgroundColor";
import RotationScreen from "../screens/Aminations/Rotation";
import SpringScreen from "../screens/Aminations/Spring";
import EventScreen from "../screens/Aminations/Event";
import ParallelScreen from "../screens/Aminations/Parallel";
import SequenceScreen from "../screens/Aminations/Sequence";
import DelayScreen from "../screens/Aminations/Delay";
import ExtrapolateScreen from "../screens/Aminations/Extrapolate";
import AnimatedComponentScreen from "../screens/Aminations/AnimatedComponent";
import HiddenScreen from "../screens/Aminations/HiddenScreen";
import StaggeredHeadsScreen from "../screens/RealWorld/StaggeredHeadsScreen";
import SwipingCardsScreen from "../screens/RealWorld/SwipingCardsScreen";

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
            <BaseStackNavigator.Screen
                name="TranslatePositionScreen"
                component={TranslatePositionScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="ScaleScreen"
                component={ScaleScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="HeightWidthScreen"
                component={HeightWidthScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="AbsolutePositionScreen"
                component={AbsolutePositionScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="BackgroundColorScreen"
                component={BackgroundColorScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="RotationScreen"
                component={RotationScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="SpringScreen"
                component={SpringScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="EventScreen"
                component={EventScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="ParallelScreen"
                component={ParallelScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="SequenceScreen"
                component={SequenceScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="DelayScreen"
                component={DelayScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="ExtrapolateScreen"
                component={ExtrapolateScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="AnimatedComponentScreen"
                component={AnimatedComponentScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="HiddenScreen"
                component={HiddenScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="StaggeredHeadsScreen"
                component={StaggeredHeadsScreen}
                initialParams={{}}
            />
            <BaseStackNavigator.Screen
                name="SwipingCardsScreen"
                component={SwipingCardsScreen}
                initialParams={{}}
            />
        </BaseStackNavigator.Navigator>
    );
};
