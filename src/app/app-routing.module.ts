import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardListComponent} from "./card-list/card-list.component";
import {CardEditComponent} from "./card-edit/card-edit.component";

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'card-edit/:id', component: CardEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
