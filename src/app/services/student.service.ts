import { Injectable } from '@angular/core';
import { Student } from '../dtos/student';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[];

  constructor() { }

  getStudents(): Observable<Student[]> {
    if (this.students === undefined) {
      this.students = [
        new Student('1', 'Julio Perez', 3, 'M'),
        new Student('2', 'Carlos Perez', 4, 'M'),
        new Student('3', 'Luis Perez', 3.6, 'M'),
        new Student('4', 'Jorge Perez', 2, 'M'),
        new Student('5', 'Pedro Perez', 1.8, 'M'),
        new Student('6', 'María Perez', 3.3, 'F'),
        new Student('7', 'Elena Perez', 3.5, 'F'),
        new Student('8', 'Sofía Perez', 3.9, 'F'),
        new Student('9', 'Andrea Perez', 2.1, 'F'),
        new Student('10', 'Alejandra Perez', 1.6, 'F')
      ];
    }
    return of(this.students);
  }
}
