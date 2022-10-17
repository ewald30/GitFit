import { CalendarList as DefaultCalendar } from "react-native-calendars"
import useThemeColor from "../hooks/useThemeColor";

export default function CalendarList(props) {
    const { style, lightColor, darkColor, title, icon, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'calendarBackground');
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');



    return (
        <DefaultCalendar
        // Collection of dates that have to be marked. Default = {}
        // style={styles.calendar}
        theme={{
            backgroundColor: 'green',
            calendarBackground: {backgroundColor},
            textSectionTitleColor: '#f44675',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#ff0067',
            dayTextColor: "#777",
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#ff678e',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#777',
            indicatorColor: '#ff678e',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          calendarWidth={300}
          {...otherProps}
        />
    )
}