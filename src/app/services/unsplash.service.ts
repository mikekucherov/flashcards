import { Injectable } from '@angular/core';

import {fetch as whatWg} from 'whatwg-fetch';
import {createApi} from 'unsplash-js';
import {UNSPLASH_API_KEY} from '../../assets/shared';

const unsplash = createApi({
  accessKey: UNSPLASH_API_KEY,
  fetch: whatWg,
});

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor() { }

  searchPhotos(query) {

    return unsplash.search.getPhotos({
      query,
      page: 1,
      perPage: 10,
      color: 'green',
      orientation: 'portrait',
    });
  }
}
