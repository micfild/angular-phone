import { Injectable } from '@angular/core';
import { Person } from "../../entity/Person";
import { HttpClient } from "@angular/common/http";
import {Phones} from "../../entity/Phones";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  listPerson: Array<Person>;
  phoneList: Array<Phones> = [];
  person: Person = null;


  constructor(private httpClient: HttpClient) {
    this.getPerson();
  }

  getPhone(): void {
    this.phoneList = [];
    for(const link of this.person.phones){
      this.httpClient.get<Person>('http://localhost:8000' + link).subscribe((result: object) => {
        console.log('get phone');
        this.phoneList.push(Object.assign(new Phones('',''), result));
        console.log(this.phoneList);
      });
    }

  }

  getPeople(id: number): void {
    this.httpClient.get<Person>('http://localhost:8000/people/' + id).subscribe((result: object) => {
        this.person = Object.assign(new Person('',''), result);
        });
    console.log(this.person);
  }

  getPerson(): void {
    this.httpClient.get('http://localhost:8000/people/').subscribe((results: Array<object>) => {
      this.listPerson = results.map((obj: object) => {
        return Object.assign(new Person('',''), obj);
      });
    });
  }
}
