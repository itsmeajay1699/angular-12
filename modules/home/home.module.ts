import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserDetailsComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
