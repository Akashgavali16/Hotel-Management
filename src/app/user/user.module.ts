import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SharedModule } from '../shared/shared.module';
import { BooknowComponent } from './booknow/booknow.component';


@NgModule({
  declarations: [
    UserComponent,
    LoginsuccessComponent,
    BooknowComponent
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
