import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.scss']
})
export class LoginsuccessComponent {
  endPoint: any;
  signInOrSignUp: any;
  ownerName:any;

 constructor(  private dataservice: DataServiceService,
  private router :Router){}

  ngOnInit(){

  this.endPoint = this.dataservice.endPoint;
  this.signInOrSignUp =  this.dataservice.signinOrSignUp;
  this.ownerName = this.dataservice.ownerName;
   

  console.log('this.signInOrSignUp --',this.signInOrSignUp, this.ownerName ,this.endPoint);
 
  }

  viewHotelList(){
    this.router.navigateByUrl('/hotelDetails');
  }
  back(){
    this.signInOrSignUp =  this.dataservice.signinOrSignUp;
    if(this.signInOrSignUp =='signup'){
      this.router.navigateByUrl('/signin');
    }
    else{
      this.router.navigateByUrl('/signup')
    }
  }

}
