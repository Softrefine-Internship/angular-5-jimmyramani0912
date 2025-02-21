import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor() {}

  private data = [1, 2, 3, 4, 5];

  getData(): Observable<number[]> {
    return of(this.data); // return observable emit data
  }
}
