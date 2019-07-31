import { Injectable } from '@angular/core';
import { Staff } from '../dtos/staff';
import { Observable, of } from 'rxjs';
import { flatMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffers: Staff[];
  constructor() { }

  getStaffers(): Observable<Staff[]> {
    if (this.staffers === undefined) {
      this.staffers = [
        new Staff('1', 'Pedro Juarez', 10000),
        new Staff('2', 'Irma Juarez', 11000),
        new Staff('3', 'Juan Juarez', 12000),
        new Staff('4', 'Vicente Juarez', 13000),
        new Staff('5', 'Perla Juarez', 14000),
        new Staff('6', 'Omar Juarez', 15000),
        new Staff('7', 'Andrés Juarez', 16000)
      ];
    }
    return of(this.staffers);
  }

  getStaffer(id: string): Observable<Staff> {
    return this.getStaffers().pipe(
      flatMap(res => res),
      filter(res => res.id === id)
    );
  }
}
