import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OwnerComponent,
    LoginsuccessComponent,
    HotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule ,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
