import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userData: any;

  constructor(private route: Router) {
    if (this.route.getCurrentNavigation()?.extras.state) {
      this.userData = this.route.getCurrentNavigation()?.extras.state?.['userData'];
    }
  }

  ngOnInit(): void {
  }

}
