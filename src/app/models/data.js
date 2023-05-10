module.exports = class Data {
    constructor(name, latitude, longitude, day, time, people) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
      this.day = day;
      this.time = time;
      this.people = people;
    }
};