import {Component, OnInit} from "@angular/core";
import { RouterQuery } from "@datorama/akita-ng-router-store";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {

  deckId$ = this.routerQuery.selectParams('deckId');

  constructor(private routerQuery: RouterQuery) {
  }
  ngOnInit() {
    this.deckId$.subscribe(() => {
      console.log('SUB')
    });
  }
}
