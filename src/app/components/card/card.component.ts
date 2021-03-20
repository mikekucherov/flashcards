import {Component, Input, OnInit, Output, EventEmitter, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title;
  @Input() imageList;

  @Output() titleChange = new EventEmitter();

  @ViewChild('carouselComponent') carouselComponentEl: any;

  constructor() { }

  ngOnInit(): void {
  }

  updateTitle(value): void {
    this.titleChange.emit(value);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyboardEvent(evt: KeyboardEvent) {

    switch (evt.code) {
      case 'ArrowUp':
        this.carouselComponentEl.pre();
        break;
      case 'ArrowDown':
        this.carouselComponentEl.next();
        break;
    }
  }

}
