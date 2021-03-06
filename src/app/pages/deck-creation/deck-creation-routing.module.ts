import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeckCreationComponent} from './deck-creation.component';

const routes: Routes = [{
  path: '',
  component: DeckCreationComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeckCreationRoutingModule { }
