import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherViewComponent } from './components/teacher-view/teacher-view.component';
import { StaffViewComponent } from './components/staff-view/staff-view.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StaffComponent } from './components/staff/staff.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TeacherViewComponent,
    StaffViewComponent,
    StudentViewComponent,
    TeacherListComponent,
    StaffListComponent,
    StudentListComponent,
    StaffComponent,
    TeacherComponent,
    StudentComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
