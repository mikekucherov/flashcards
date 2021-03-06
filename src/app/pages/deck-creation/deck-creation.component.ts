import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';
import { BehaviorSubject, of } from 'rxjs';
import { auditTime, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-deck-creation',
  templateUrl: './deck-creation.component.html',
  styleUrls: ['./deck-creation.component.scss'],
})
export class DeckCreationComponent implements OnInit {
  searchQuery$ = new BehaviorSubject('');

  imageList$ = this.searchQuery$.asObservable().pipe(
    auditTime(1000),
    switchMap((value) => this.unsplashService.searchPhotos(value)),
    map((res) => res.response.results.map((result) => result.urls.regular))
  );

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit(): void {}

  updateSearchQuery(inputValue): void {
    this.searchQuery$.next(inputValue);
  }
}
