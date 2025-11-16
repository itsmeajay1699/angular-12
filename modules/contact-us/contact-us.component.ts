import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }




  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    const { age, name, desc } = this.route.snapshot.queryParams;
    console.log(`Name: ${name}, Age: ${age}, Description: ${desc}`);
  }

}
