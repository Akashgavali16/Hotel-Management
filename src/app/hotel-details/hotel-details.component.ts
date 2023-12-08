import { Component } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent {
  hotelDetails: any;
  signInOrSignUp:any;
  endpoint!: string;
  inputBoxValue :any;
  hotelEndPoint = 'hotelDetails'
  tableHeadings =  ["Owner Name","Hotel Name","Hotel Mobile","Hotel Address",
  "Hotel Menu","City","Pancard No","Number Of Rooms","Number of Employes",'Book Now'];
  constructor(private dataservice: DataServiceService, 
    private router : Router,
    public dialog: MatDialog,
   ){}
  ngOnInit(){
    this.endpoint = this.dataservice.endPoint;
    this.getHotelDetails();
    
  }
  async getHotelDetails(){
    // let hotelEndPoint = 'hotelDetails';
    this.hotelDetails =  await this.dataservice.getApiCall(this.hotelEndPoint).toPromise();
    console.log('this.hotelDetails',this.hotelDetails);
    }

  // back(){
  //   this.signInOrSignUp =  this.dataservice.signinOrSignUp;
  //   if(this.signInOrSignUp =='signin'){
  //     this.router.navigateByUrl('/signin');
  //   }
  //   else{
  //     this.router.navigateByUrl('/signup');
  //   }
  // }

  back() {
    if (this.endpoint == 'admin') {
      this.router.navigateByUrl('/admin/loginsuccess');
    }
    else if (this.endpoint == 'owner') {
      this.router.navigateByUrl('/owner/loginsuccess');
    }
    else {
      this.router.navigateByUrl('/user/loginsuccess');
    }
  }
  
  async delete(id: any){

    let hotelEndPoint = 'hotelDetails';
    await this.dataservice.deleteApiCall(hotelEndPoint,id).toPromise();
    this.getHotelDetails();
    console.log('delete',this.getHotelDetails);
  
}
bookNow(){
  this.router.navigateByUrl('/user/booknow')
}

}
