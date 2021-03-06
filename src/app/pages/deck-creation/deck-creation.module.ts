import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {DeckCreationComponent} from './deck-creation.component';
import {DeckCreationRoutingModule} from './deck-creation-routing.module';



@NgModule({
  declarations: [DeckCreationComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DeckCreationRoutingModule
  ]
})
export class DeckCreationModule { }
