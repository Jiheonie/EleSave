import { useState, useEffect, useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
import MainColor from "../mainColor/mainColor";
import AdjustPannelBtns from "./adjustPannelBtns";
import FontText from "../fontText/fontText";

import AIO_account from "../../constances/adafruit";
import DevicePower from "../../constances/device_power";
import { AppContext } from "../../App";

const AdjustPannel = () => {
  const { pickedDevice, setPickedDevice } = useContext(AppContext);

  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const sendToAdafruitIO = async (newValue) => {
      const requestOptions = {
        method: "POST",
        headers: {
          "X-AIO-Key": AIO_account.key,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: newValue }),
      };
      const response = await fetch(
        `https://io.adafruit.com/api/v2/${AIO_account.username}/feeds/${pickedDevice.aio_feed_name}/data`,
        requestOptions
      );
      if (!response.ok) {
        console.error("Failed to send data to Adafruit IO");
      } else {
        console.log("Send completely!!");
      }
    };

    sendToAdafruitIO(pickedDevice.power);
  }, [pickedDevice.power]);

  const handleUpButtonPressIn = () => {
    const newIntervalId = setInterval(() => {
      setPickedDevice((device) => {
        const newDevice = Object.create(device);

        let newPower =
          newDevice.power < DevicePower.max
            ? newDevice.power + 5
            : newDevice.power;

        newDevice.setPower(newPower);
        return newDevice;
      });
    }, 100);

    setIntervalId(newIntervalId);
  };

  const handleDownButtonPressIn = () => {
    const newIntervalId = setInterval(() => {
      setPickedDevice((device) => {
        const newDevice = Object.create(device);

        let newPower =
          newDevice.power > DevicePower.min
            ? newDevice.power - 5
            : newDevice.power;

        newDevice.setPower(newPower);
        return newDevice;
      });
    }, 100);

    setIntervalId(newIntervalId);
  };

  const handleButtonPressOut = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleCloseButtonPress = () => {
    handleButtonPressOut();
    setPickedDevice((device) => {
      const newDevice = Object.create(device);
      newDevice.setPower(0);
      return newDevice;
    });
  };

  const colors = ["#DADCE0", "#EFF1F5"];

  return (
    <LinearGradient colors={colors} style={{ borderRadius: 22 }}>
      <View style={styles.pannelContainer}>
        <MainColor style={{ borderRadius: 20 }}>
          <View style={styles.pannelDisplay}>
            <FontText
              font="SF-Pro-Display-BoldItalic"
              style={styles.textDisplay}
            >
              {pickedDevice.power}%
            </FontText>
          </View>
        </MainColor>
        <AdjustPannelBtns
          isManual={pickedDevice.isManual}
          onUpPressIn={handleUpButtonPressIn}
          onClosePress={handleCloseButtonPress}
          onDownPressIn={handleDownButtonPressIn}
          onPressOut={handleButtonPressOut}
        />
      </View>
    </LinearGradient>
  );
};

export default AdjustPannel;

const styles = StyleSheet.create({
  pannelContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 20,
  },
  pannelDisplay: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  textDisplay: {
    fontSize: 44,
    color: "#FFF",
  },
});
