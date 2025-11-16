import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeServiceService } from './home-service.service';
import { Observable } from 'rxjs';

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
export class HomeComponent implements OnInit, AfterViewInit {

  userData: UserData[] = [
    { name: 'Alice', age: 30, desc: 'Software Engineer' },
    { name: 'Bob', age: 25, desc: 'Designer' },
    { name: 'Charlie', age: 35, desc: 'Product Manager' }
  ]

  num: number = 0;

  // create a observable that emits numbers from 1 to 5 with interval of 1 second
  streamData$ = new Observable<number>(obsserver => {
    let count = 0;
    const interval = setInterval(() => {
      obsserver.next(++count);
      if (count == 5) {
        obsserver.complete();
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  })

  // subscribing to the observable

  streamDataSubscription = this.streamData$.subscribe({
    next: (data) => {
      this.num = data;
    },
    error: (err) => {
      console.error('Error in observable:', err);
    },
    complete: () => {
      console.log('Observable completed');
    }
  })

  // unsubscribe after 10 seconds




  loading: boolean = false;

  length: number = 0;

  @ViewChild('gridTemplateColumns') gridTemplateColumnsRef: ElementRef | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private homeService: HomeServiceService) {
    // this.fetchUserData();
  }
  ngAfterViewInit(): void {
    this.length = this.gridTemplateColumnsRef ? this.gridTemplateColumnsRef.nativeElement.children.length : 0;
  }

  home: boolean = true;
  value: string = "Initial Value";

  ngOnInit(): void {

    setTimeout(() => {
      this.streamDataSubscription.unsubscribe();
    }, 7000);

    console.log(this.route.snapshot.data);
    setTimeout(() => {
      this.home = false;
    }, 3000);
  }

  async fetchUserData() {
    try {
      this.loading = true;
      this.userData = await this.homeService.getUserData() || [];
      this.loading = false;
    } catch (error) {
      console.error('Error fetching user data:', error);
      this.loading = false;
    }

  }

}
