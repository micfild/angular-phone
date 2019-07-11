import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CardService} from "../services/card.service";
import {Person} from "../../entity/Person";

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss']
})
export class CardEditComponent implements OnInit {
  private sub: any;

  constructor(private route: ActivatedRoute, public cardService: CardService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(Params =>{
      this.cardService.getPeople(Params.id);
    });
    console.log(this.cardService.person);
  }

}
