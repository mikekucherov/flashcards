import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'decks',
    pathMatch: 'full'
  },
  {
    path: 'decks',
    loadChildren: () =>
      import('./pages/decks/decks.module').then((m) => m.DecksModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/deck-creation/deck-creation.module').then((m) => m.DeckCreationModule),
  },
  {
    path: 'list/:deckId',
    loadChildren: () =>
      import('./pages/cards-list/cards-list.module').then((m) => m.CardsListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
