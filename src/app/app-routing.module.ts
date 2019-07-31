import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { StaffListComponent } from './components/staff-list/staff-list.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StaffComponent } from './components/staff/staff.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'demo', component: HomeComponent, canActivate: [AuthGuard], children: [
      {
        path: 'staff-list', component: StaffListComponent, canActivate: [AuthGuard], children: [
          { path: ':id', component: StaffComponent, canActivate: [AuthGuard] }
        ]
      },
      { path: 'teacher-list', component: TeacherListComponent, canActivate: [AuthGuard] },
      { path: 'student-list', component: StudentListComponent, canActivate: [AuthGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
