

export class Outbreak {
    city: String;
    dateRecorded: String;
    numInfected: Number;

    constructor(city: String, dateRecorded: String, numInfected: Number) {
        this.city = city;
        this.dateRecorded = dateRecorded;
        this.numInfected = numInfected;
    }
}
