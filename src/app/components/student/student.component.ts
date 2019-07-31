import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/dtos/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() student: Student;

  constructor() { }

  ngOnInit() {
  }

}
