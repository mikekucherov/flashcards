import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardsListComponent} from "./cards-list.component";

const routes: Routes = [{
  path: '',
  component: CardsListComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsListRoutingModule { }
