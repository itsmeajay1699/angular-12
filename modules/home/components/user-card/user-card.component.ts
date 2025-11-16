import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';


export interface UserData {
  name: string;
  age: number;
  desc: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit, OnChanges {

  @Input() user: { name: string; age: number; desc: string } | undefined;
  @Input() home: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Home input changed:', changes['home'].currentValue);
  }

  handleCardClick(user: UserData | undefined) {
    this.router.navigate(['/user', user?.name], {
      state: { userData: user }
    });
  }


}
