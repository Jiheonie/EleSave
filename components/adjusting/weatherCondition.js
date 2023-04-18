import { StyleSheet, View } from "react-native";
import CondCard from "./condCard";

const WeatherCondition = () => {
  return (
    <View style={styles.weatherCondition}>
      <CondCard
        icon="water-percent"
        title="Inside Humidity"
        value={40}
        unit="%"
      />
      <CondCard
        icon="temperature-celsius"
        title="Outside Temps."
        value={25}
        unit="°C"
      />
    </View>
  );
};

export default WeatherCondition;

const styles = StyleSheet.create({
  weatherCondition: {
    flexDirection: "row",
    gap: 20,
  },
});
