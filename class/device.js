class Device {
  constructor(key, label, value, type) {
    this.aio_feed_name = key;
    this.label = label;
    this.value = value;
    this.type = type;
    this.isManual = true;
    this.power = 0;
    this.numOfPeople = 0;
  }

  switchMode = () => {
    this.isManual = !this.isManual;
    return this;
  };

  setPower = (pow) => {
    this.power = pow;
    return this;
  };
}

export default Device;

//aio_key
// lable
// value
// type
// mode
// power
// numOfPeople
