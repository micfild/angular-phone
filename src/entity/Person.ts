export class Person {
    id: number;
    firstName: string;
    lastName: string;
    BirthAt: Date;
    notes: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


}
