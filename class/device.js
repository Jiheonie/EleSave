// import { createMQTTClient } from "../services/mqttServices";
// import { DeviceEventEmitter } from "react-native";

class Device {
  constructor(key, label, value, type) {
    this.aio_feed_name = key;
    this.label = label;
    this.value = value;
    this.type = type;
    this.isManual = true;
    this.power = 0;
    this.numOfPeople = 0;

    // this.mount();
  }

  // mount = () => {
  //   this.mqttClient = createMQTTClient();
  //   this.mqttClient.on("connect", this.onConnect.bind(this));
  //   this.mqttClient.on("message", this.onMessage.bind(this));
  //   this.mqttClient.on("error", (error) => {
  //     console.log(error.message);
  //   });
  // };

  // onConnect = () => {
  //   console.log(`${this.label} is connected.`);
  //   this.mqttClient.subscribe(this.aio_feed_name, (err) => {
  //     if (err) return console.error(`Failed to subscribe ${this.label}`);

  //     console.log(`Subscribed to ${this.label}`);
  //   });
  // };

  // onMessage = (topic, message) => {
  //   console.log(topic, message.toString());
  //   DeviceEventEmitter.emit(topic, message.toString());
  // };

  switchMode = () => {
    this.isManual = !this.isManual;
    return this;
  };

  setPower = (pow) => {
    this.power = pow;
    // this.mqttClient.on("connect", () => {
    //   this.mqttClient.publish(
    //     this.aio_feed_name,
    //     JSON.stringify({ value: pow })
    //   );
    //   if (err) {
    //     console.error("Failed to publish message:", err);
    //   } else {
    //     console.log("Message published successfully!");
    //   }
    // });

    return this;
  };
}

export default Device;
