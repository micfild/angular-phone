import { Injectable } from '@angular/core';
import { Person } from "../../entity/Person";
import { HttpClient } from "@angular/common/http";
import {Phones} from "../../entity/Phones";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  listPerson: Array<Person>;
  person: Person = null;

  constructor(private httpClient: HttpClient) {
    this.getPerson();
  }

  getPhone(link: string): Phones {
    const phone = new Phones('','');
    this.httpClient.get<Person>('http://localhost:8000' + link).subscribe((result: object) => {
      console.log('get phone');
      Object.assign(phone, result);
    });
    return phone;
  }

  getPeople(id: number): void {
    this.httpClient.get<Person>('http://localhost:8000/people/' + id).subscribe((result: object) => {
      console.log('get person');
      this.person = Object.assign(new Person('',''), result);
    });
  }

  getPerson(): void {
    this.httpClient.get('http://localhost:8000/people/').subscribe((results: Array<object>) => {
      this.listPerson = results.map((obj: object) => {
        return Object.assign(new Person('',''), obj);
      });
    });
  }
}
