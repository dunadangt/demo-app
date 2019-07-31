import { Component, OnInit, OnDestroy } from '@angular/core';
import { Staff } from 'src/app/dtos/staff';
import { StaffService } from 'src/app/services/staff.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, OnDestroy {

  staff$: Observable<Staff>;
  constructor(private service: StaffService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    console.log('recuperando staff ', id);
    this.staff$ = this.service.getStaffer(id);
  }

  ngOnDestroy() {
    console.log('On destroy');
  }
}
