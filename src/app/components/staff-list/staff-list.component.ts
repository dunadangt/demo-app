import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from 'src/app/dtos/staff';
import { StaffService } from 'src/app/services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {

  staffers: Observable<Staff[]>;
  constructor(private service: StaffService, private router: Router) { }

  ngOnInit() {
    this.staffers = this.service.getStaffers();
  }

  onSelect(staff: Staff) {
    const url = '/demo/staff-list/' + staff.id;
    console.log('on select staff ', staff, url);
    this.router.navigateByUrl(url, { replaceUrl: true, skipLocationChange: false });
  }

}
