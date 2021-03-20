import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from '../../components/components.module';
import {CardsListComponent} from "./cards-list.component";
import {CardsListRoutingModule} from "./cards-list-routing.module";


@NgModule({
  declarations: [CardsListComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    CardsListRoutingModule
  ]
})
export class CardsListModule { }
