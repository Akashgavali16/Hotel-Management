import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';

const routes: Routes = [
  {path: '', component: OwnerComponent},
  {path: 'loginsuccess', component: LoginsuccessComponent},
  {path: 'hotelregistration',component: HotelRegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
