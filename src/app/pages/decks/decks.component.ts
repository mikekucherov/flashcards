import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.component.html',
  styleUrls: ['./decks.component.scss']
})
export class DecksComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreation(): void {
    this.router.navigate(['create']);
  }
}
