import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { shareReplay } from 'rxjs/operators';

import { GalleryItem } from '../models/gallery-item.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryWebService {

  constructor(private http: HttpClient) { }

  public getGalleryItems(numOfGalleryItems?: number): Observable<GalleryItem[]> {
    return this.http.get<GalleryItem[]>('https://jsonplaceholder.typicode.com/photos')
      .pipe(map(response => {
        if (numOfGalleryItems !== null && numOfGalleryItems !== undefined) {
          return response.slice(0, numOfGalleryItems);
        } else {
          return response;
        }
      }), shareReplay(1)
      );
  }
}
