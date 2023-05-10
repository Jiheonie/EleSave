import { StyleSheet, View } from "react-native";

import Welcome from "./screens/welcomeScreen";
import Adjusting from "./screens/adjustingScreen";
import { useState, createContext, useEffect, useMemo, useContext } from "react";

import Device from "./class/device";
import Home from "./screens/homeScreen";
import AuthContextProvider, { AuthContext } from "./store/authContext";

export const AppContext = createContext();

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdjusting, setIsAdjusting] = useState(false);

  const [devices, setDevices] = useState([
    new Device("quat", "Fan 1", "Fan 1", "Fan"),
    new Device("quat", "Fan 2", "Fan 2", "Fan"),
    new Device("den", "Light 1", "Light 1", "Light"),
    new Device("den", "Light 2", "Light 2", "Light"),
  ]);

  const [pickedDevice, setPickedDevice] = useState({});

  const [selectedSegment, setSelectedSegment] = useState("Light");


  useEffect(() => {
    console.log("App Log: devices");
    // console.log(devices);
  }, [devices]);

  useEffect(() => {
    // Can't compare 2 objects by '==='
    // Compare by keys of objects
    if (Object.keys(pickedDevice).length != 0) {
      console.log("App Log: pickedDevice:");
      console.log(pickedDevice);

      const index = devices.findIndex(
        (item) => item.label === pickedDevice.label
      );

      setDevices((devicesList) => {
        const newDeviceList = Object.create(devicesList);
        newDeviceList.splice(index, 1, pickedDevice);
        return newDeviceList;
      });
    }
  }, [pickedDevice]);

  let screen = !isLogged ? (
    <Welcome />
  ) : !isAdjusting ? (
    <Home />
  ) : (
    <Adjusting />
  );

  const contextValue = useMemo(
    () => ({
      setIsLogged,
      selectedSegment,
      setSelectedSegment,
      devices,
      setDevices,
      pickedDevice,
      setPickedDevice,
      setIsAdjusting,
    }),
    [devices, selectedSegment, pickedDevice]
  );

  return (
    <AuthContextProvider>
      <AppContext.Provider value={contextValue}>
        <View style={styles.appContainer}>{screen}</View>
      </AppContext.Provider>
    </AuthContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
