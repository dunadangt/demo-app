import { Component, OnInit } from '@angular/core';
import { AuthStateService } from 'src/app/auth/auth-state.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userid = new FormControl('');
  password = new FormControl('');

  constructor(private service: AuthStateService, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    console.log('signin');
    this.service.signIn(this.userid.value);
    this.router.navigateByUrl('/demo');
  }

}
