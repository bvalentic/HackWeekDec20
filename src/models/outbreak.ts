

export class Outbreak {
    city: String;
    dayRecorded: String;
    numInfected: Number;

    constructor(city: String, dayRecorded: String, numInfected: Number) {
        this.city = city;
        this.dayRecorded = dayRecorded;
        this.numInfected = numInfected;
    }
}
