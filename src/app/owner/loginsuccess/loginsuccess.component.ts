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
  hotelDetails: any;
  ownerName: any;
  signInOrSignUp: any;
  hotelEndPoint= 'hotelDetails';
  inputBoxValue: any;
  tableHeadings =  ["Owner Name","Hotel Name","Hotel Contact No",
  "Hotel Address","Hotel Menu","City","Pancard No","Number Of Rooms","Number of Employes","Owner Check","Delete","Edit"];
  hotelDetailsByOwner: any = [];
  hotelDetailsById: any;
 
 constructor(private dataservice: DataServiceService,
  private router: Router){}

  
  ngOnInit(){
    this.endPoint = this.dataservice.endPoint;
    this.signInOrSignUp =  this.dataservice.signinOrSignUp;
    this.ownerName = this.dataservice.ownerName;
    console.log('this.signInOrSignUp --',this.signInOrSignUp,this.signInOrSignUp,this.ownerName,this.endPoint);
   
    }

  back(){
    if(this.signInOrSignUp =='signin'){
      this.router.navigateByUrl('/signin');
    }
    else{
      this.router.navigateByUrl('/signup');
    }
  }
  viewAllHotelList(){
    this.router.navigateByUrl('/hotelDetails')
   }

   async delete(id:number){
    await this.dataservice.deleteApiCall(this.hotelEndPoint, id).toPromise();
    this.viewMyHotelList();
  }

  async edit(id:number){
    console.log(id);
    
    this.dataservice.editId = id;
    this.dataservice.editJourney = true;

    this.hotelDetailsById =  await this.dataservice.getApiCall(this.hotelEndPoint, id).toPromise();
     console.log('this.hotelDetailsById-->',  this.hotelDetailsById);
     this.dataservice.hotelDetailsById =  this.hotelDetailsById ;
     this.router.navigateByUrl('/owner/hotelregistration');
  }

   async viewMyHotelList(){

    this.hotelDetails = await this.dataservice.getApiCall(this.hotelEndPoint).toPromise();
    console.log(" this.hotelDetails ", this.hotelDetails );
    
    if(this.hotelDetails){
      this. hotelDetailsByOwner = [];
      this.hotelDetails.forEach((element:any) => {
        let name = element.ownerName?.toLowerCase();
        console.log(name);
        let signInName = this.ownerName?.toLowerCase() ;
        if(name == signInName ){
          this.hotelDetailsByOwner.push(element);
        }
      });
      console.log('this.hotelDetailsByOwner',this.hotelDetailsByOwner);
      if(this.hotelDetailsByOwner.length == 0){
        alert('Hotels Not found....')
      }
    }
}
newHotelRegister(){
  this.dataservice.editJourney = false;
  this.router.navigateByUrl('/owner/hotelregistration');
}

   }


