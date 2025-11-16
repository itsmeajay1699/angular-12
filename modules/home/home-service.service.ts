import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData } from './components/user-card/user-card.component';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient) { }

  async getUserData() {
    return this.http.get<UserData[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}