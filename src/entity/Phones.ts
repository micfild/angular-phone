export class Phones {
    id: number;
    number: string;
    type: string;
    person: string;

    constructor(number: string, person: string){
        this.number = number;
        this.person = person;
    }
}
