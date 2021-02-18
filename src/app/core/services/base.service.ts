import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  colorSubject = new BehaviorSubject<string>('');

  constructor() { }
}
