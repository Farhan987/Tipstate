import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from "native-base";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc."
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
};

LocaleConfig.defaultLocale = "fr";
export default class CustomCalendar extends Component {
  render() {
    return (
      <View styles={{ height: 300, backgroundColor: "red" }}>
        <Calendar
          // Initially visible month. Default = Date()
          current={"2012-03-01"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2012-05-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2012-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"d MM yyyy"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={direction => {
            if (direction == "left")
              return (
                <Icon
                  name="arrow-left"
                  type="FontAwesome"
                  size={30}
                  color={"blue"}
                  style={{ color: "#979797" }}
                />
              );
            if (direction == "right")
              return (
                <Icon
                  name="arrow-right"
                  type="FontAwesome"
                  size={30}
                  color={"blue"}
                  style={{ color: "#979797" }}
                />
              );
          }}
          theme={{
            backgroundColor: "#EAEAEA",
            calendarBackground: "#F6F6F6",
            textSectionTitleColor: "#979797",

            selectedDayBackgroundColor: "#979797",
            selectedDayTextColor: "#979797",
            todayTextColor: "#979797",
            dayTextColor: "#979797",
            textDisabledColor: "#979797",
            dotColor: "#979797",
            selectedDotColor: "#979797",
            arrowColor: "orange",
            monthTextColor: "orange",
            indicatorColor: "orange",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
        />
      </View>
    );
  }
}
