import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from 'src/app/dtos/student';
import { StudentService } from 'src/app/services/student.service';
import { FormControl } from '@angular/forms';
import { filter, map, tap, flatMap, toArray, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students: Observable<Student[]>;
  selectedStudent: Student;
  filterGpa = new FormControl(0);
  filterSex = new FormControl('M');

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.getStudentList();
  }

  onSelect(student: Student) {
    this.selectedStudent = student;
  }

  filter() {
    this.students = this.getStudentList();
  }

  getStudentList(): Observable<Student[]> {
    const studentArray: Student[] = [];
    this.studentService.getStudents().pipe(
      flatMap(res => res),
      filter(res => res.gpa >= this.filterGpa.value && res.gender === this.filterSex.value),
      tap(res => studentArray.push(res))
    ).subscribe(
      res => res
    );
    return of(studentArray);
  }

  filterStudentGpas(students: Student[]) {

  }
}

