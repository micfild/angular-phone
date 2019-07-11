import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CardService} from "../services/card.service";
import {Person} from "../../entity/Person";
import {Phones} from "../../entity/Phones";

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
  private sub: any;
  person: Person = null;
  phoneList: Array<Phones> = [];

  constructor(private route: ActivatedRoute, public cardService: CardService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(Params =>{
      this.cardService.getPeople(Params.id);
    });
    this.person = new Person('','');
    console.log(this.cardService.person);
    Object.assign(this.person, this.cardService.person);
    console.log(this.person.phones);
    // this.getNum(this.person.phones);
  }

  // getNum(list: Array<string>): void {
  //   for(let number of list){
  //     this.phoneList.push(this.cardService.getPhone(number));
  //   }
  // }

}
