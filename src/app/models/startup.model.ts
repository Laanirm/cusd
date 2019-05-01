export class Startup {
    "timestamp": String;
    "startupName": String;
    "logoLink": String;
    "shortPitch": String;
    "description": String;
    "industry": String;
    "companySize": String;
    "position1": String;
    "position2": String;
    "position3": String;
    "position4": String;
    "pointOfContactName": String;
    "pointOfContactEmail": String;
    "website": String;
    
    constructor(dirtyData: Array<String>) {
        this.timestamp = dirtyData[0].toString();
        this.startupName = dirtyData[1];
        this.logoLink = dirtyData[2];
        this.shortPitch = dirtyData[3];
        this.description = dirtyData[4];
        this.industry = dirtyData[5];
        this.companySize = dirtyData[6];
        this.position1 = dirtyData[7];
        this.position2 = dirtyData[8];
        this.position3 = dirtyData[9];
        this.position4 = dirtyData[10];
        this.pointOfContactName = dirtyData[11];
        this.pointOfContactEmail = dirtyData[12];
        this.website = dirtyData[13];
    }
}