import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input() deckInfo;
  @Input() isCreateButton = false;

  @Output() cardClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
