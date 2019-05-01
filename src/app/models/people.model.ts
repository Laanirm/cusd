export class People {
    "timestamp": Number;
    "name": String;
    "profilePictureLink": String;
    "email": String;
    "socialLink": String;
    "headline": String;
    "skill1": String;
    "skill2": String;

    constructor(dirtyData: Array<String>) {
        this.timestamp = parseInt(dirtyData[0].toString());
        this.name = dirtyData[1];
        this.profilePictureLink = dirtyData[2];
        this.email = dirtyData[3];
        this.socialLink = dirtyData[4];
        this.headline = dirtyData[5];
        this.skill1 = dirtyData[6];
        this.skill2 = dirtyData[7];   
    }
}