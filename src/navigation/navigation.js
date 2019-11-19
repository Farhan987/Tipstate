import React, { Component } from "react";
import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import InitialScreen from "../screens/initialScreen";
import FavoriteHouseScreen from "../screens/favoriteHouseScreem";
import FirstChatScreen from "../screens/chatScreens/firstChatScreen";
import SecondChatScreen from "../screens/chatScreens/chatScreenTwo";
import NotificationScreen from "../screens/notificationScreen";
import CalanderScreen from "../screens/myCalendarScreen";
import HouseListScreen from "../screens/listViewScreen";
import HouseComparisonScreen from "../screens/comaprisonHouseScreen";
import SearchLocationScreen from "../screens/searchLocationScreen";
import EvaluationScreen from "../screens/myEvaluationScreen";
import StatisticsScreen from "../screens/myStatisticsScreen";
import ParameterScreen from "../screens/myParameterScreen";
import SearchingFormScreen from "../screens/searchingFormScreen";
import HouseCurrentLocationScreen from "../screens/houseCurrentLocationScreen";
import AddNewPropertiesScreen from "../screens/newPropertiesScreen";
import ProfileScreen from "../screens/profileScreen";
import DirectoryScreen from "../screens/directoryScreen";
import PropertiesMapViewScreen from "../screens/myPropertiesMapViewScreen";
import PropertiesListScreen from "../screens/myPropertiesListScreen";
import AgentScreen from "../screens/myAgentsScreen";
import AddAgentScreen from "../screens/addAgentScreen";
import HouseDetailScreen from "../screens/houseDetailScreen";
import HomeTabView from "../screens/BottomTabView";
const AppStackNavigator = createStackNavigator(
  {
    InitialScreen: { screen: InitialScreen },
    // FavoriteHouseScreen: { screen: FavoriteHouseScreen },
    // FirstChatScreen: { screen: FirstChatScreen },
    HomeTabView: { screen: HomeTabView },
    SecondChatScreen: { screen: SecondChatScreen },
    CalanderScreen: { screen: CalanderScreen },
    NotificationScreen: { screen: NotificationScreen },
    HouseListScreen: { screen: HouseListScreen },
    // HouseComparisonScreen: { screen: HouseComparisonScreen },
    SearchLocationScreen: { screen: SearchLocationScreen },
    EvaluationScreen: { screen: EvaluationScreen },
    StatisticsScreen: { screen: StatisticsScreen },
    ParameterScreen: { screen: ParameterScreen },
    SearchingFormScreen: { screen: SearchingFormScreen },
    HouseCurrentLocationScreen: { screen: HouseCurrentLocationScreen },
    // AddNewPropertiesScreen: { screen: AddNewPropertiesScreen },
    DirectoryScreen: { screen: DirectoryScreen },
    ProfileScreen: { screen: ProfileScreen },
    PropertiesMapViewScreen: { screen: PropertiesMapViewScreen },
    PropertiesListScreen: { screen: PropertiesListScreen },
    AgentScreen: { screen: AgentScreen },
    AddAgentScreen: { screen: AddAgentScreen },
    HouseDetailScreen: { screen: HouseDetailScreen }
  },
  {
    initialRouteName: "InitialScreen",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
