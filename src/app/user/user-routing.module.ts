import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { BooknowComponent } from './booknow/booknow.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path:'loginsuccess',component: LoginsuccessComponent},
  { path: 'booknow', component: BooknowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
