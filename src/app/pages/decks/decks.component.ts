import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit {

  decks = [
    {
      id: 1,
      title: 'Deck 1'
    },
    {
      id: 2,
      title: 'Deck 2'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreation(): void {
    this.router.navigate(['create']);
  }

  openDeck(deckId): void {
    this.router.navigate(['list', deckId]);
  }
}
