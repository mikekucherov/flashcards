import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import {NZ_ICONS, NzIconModule} from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { CardComponent } from './card/card.component';
import {FormsModule} from '@angular/forms';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [DeckComponent, CardComponent],
  exports: [
    DeckComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    NzIconModule,
    FormsModule
  ],
  providers: [ { provide: NZ_ICONS, useValue: icons } ]

})
export class ComponentsModule { }
