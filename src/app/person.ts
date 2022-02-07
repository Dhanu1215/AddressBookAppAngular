export class Person {
    firstName: String;
    lastName: String;
    gender: String;
    phoneNum: number;
    email: String;
    city: String;
    state: String;
    country: String;
    address: String;
    profilePic: String;

    constructor(firstName: String, lastName: String, gender: String, phoneNum: number, email: String,  city: String, state: String, country: String,  address: String, profilePic: String) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.phoneNum = phoneNum;
        this.email = email;
        this.city = city;
        this.state = state;
        this.country = country;
        this.address = address;
        this.profilePic = profilePic;
    }

}