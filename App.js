import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HouseCamparisonScreen from "./src/screens/comaprisonHouseScreen";
// import MyEvaluationScreen from "./src/screens/myEvaluationScreen";
// import PostScreen from "./src/screens/postScreen";
// import ChatScreenOne from "./src/screens/chatScreens/firstChatScreen";
// import ChatScreenTwo from "./src/screens/chatScreens/chatScreenTwo";
// import CurrentLocationOfHouseScreen from "./src/screens/houseCurrentLocationScreen";
// import HouseDetailScreen from "./src/screens/houseDetailScreen";
// import MyParametersScreen from "./src/screens/myParameterScreen";
// import MyCalendarScreen from "./src/screens/myCalendarScreen";
// import AddAgentScreen from "./src/screens/addAgentScreen";
// import MyAgentsScreen from "./src/screens/myAgentsScreen";
// import MyStatisticsScreen from "./src/screens/myStatisticsScreen";
// import SearchLocationScreen from "./src/screens/searchLocationScreen";
// import SearchingFormScreen from "./src/screens/searchingFormScreen";
// import MyPropertiesListScreen from "./src/screens/myPropertiesListScreen";
// import MyPropertiesMapViewScreen from "./src/screens/myPropertiesMapViewScreen";
// import DirectoryScreeen from "./src/screens/directoryScreen";
// import NotificationScreeen from "./src/screens/notificationScreen";
// import FavoriteHouseScreen from "./src/screens/favoriteHouseScreem";
// import ListViewScreen from "./src/screens/listViewScreen";
// import MapScreen from "./src/screens/mapScreen";
// import ProfileScreen from "./src/screens/profileScreen";
// import InitialScreen from "./src/screens/initialScreen";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HouseCamparisonScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
