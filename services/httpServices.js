import AIO_account from "../constances/adafruit";

const sendToAdafruitIO = async (device) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "X-AIO-Key": AIO_account.key,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value: device.power }),
  };
  const response = await fetch(
    `https://io.adafruit.com/api/v2/${AIO_account.username}/feeds/${device.aio_feed_name}/data`,
    requestOptions
  );
  if (!response.ok) {
    console.error("Failed to send data to Adafruit IO");
  } else {
    console.log("Send completely!!");
  }
};

export { sendToAdafruitIO };
