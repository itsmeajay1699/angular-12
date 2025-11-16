import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface UserData {
  name: string;
  age: number;
  desc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: UserData[] = [
    { name: 'Alice', age: 30, desc: 'Software Engineer' },
    { name: 'Bob', age: 25, desc: 'Designer' },
    { name: 'Charlie', age: 35, desc: 'Product Manager' }
  ]

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
  }

  handleCardClick(user: UserData) {
    console.log(user);
    this.router.navigate(['/user', user.name]);
  }

}
