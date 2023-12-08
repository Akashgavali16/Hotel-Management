import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss']
})
export class HotelRegistrationComponent {

  hotelRegistrationForm!: FormGroup;
  show: boolean = false;
  getEndPoint: any;

  //edit journey
  isEditJourney!: boolean;
  editId!: number;
  hotelEndPoint = 'hotelDetails';
  hotelDetailsById: any;

  constructor(private formBuilder: FormBuilder,
     private dataServiceService : DataServiceService,
     private router: Router) {

  }
  ngOnInit() {
   //edit Journey
   this.isEditJourney =this.dataServiceService.editJourney;
   this.editId = this.dataServiceService.editId
   this.hotelDetailsById = this.dataServiceService.hotelDetailsById;

   if(this.isEditJourney){
    console.log('this.hotelDetailsById',this.hotelDetailsById);
    if(this.hotelDetailsById){
      this.hotelregistration();
    }
    }
    //regular journey in OnInit
    else{
      this.hotelregistration();
    }

  }
//Edit journey
  hotelregistration() {
    this.hotelRegistrationForm = this.formBuilder.group({
      ownerName: [this.hotelDetailsById ? this.hotelDetailsById?.ownerName:'', [Validators.required, Validators.minLength(5)]],
      hotelName: [this.hotelDetailsById ? this.hotelDetailsById?.hotelName:'', [Validators.required, Validators.minLength(5)]],
      hotelMobile: [this.hotelDetailsById ? this.hotelDetailsById?.hotelMobile:'', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
      hotelAddress: [this.hotelDetailsById ? this.hotelDetailsById?. hotelAddress:'', [Validators.required]],
      hotelMenu: [this.hotelDetailsById ? this.hotelDetailsById?.hotelMenu:'', [Validators.required]],
      pancard: [this.hotelDetailsById ? this.hotelDetailsById?.pancard:'', [Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
      city: [this.hotelDetailsById ? this.hotelDetailsById?.city:'', [Validators.required]],
      numberOfRooms: [this.hotelDetailsById ? this.hotelDetailsById?.numberOfRooms:'', [Validators.required, Validators.pattern("[0-9]*$")]],
      noOfEmployes: [this.hotelDetailsById ? this.hotelDetailsById?. noOfEmployes:'', [Validators.required, Validators.pattern("[0-9]*$")]],
      acceptTerms: [this.hotelDetailsById ? this.hotelDetailsById?.acceptTerms:false, Validators.requiredTrue],

    })
  }
  ////////////////////// regular journey //////////////////////////
  // hotelregistration() {
  //   this.hotelRegistrationForm = this.formBuilder.group({
  //     ownerName: ['', [Validators.required, Validators.minLength(5)]],
  //     hotelName: ['', [Validators.required, Validators.minLength(5)]],
  //     hotelMobile: ['', [Validators.required, Validators.pattern("[0-9]*$"), Validators.maxLength(10)]],
  //     hotelAddress: ['', [Validators.required]],
  //     hotelMenu: ['', [Validators.required]],
  //     pancard: ['', [Validators.required, Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$')]],
  //     city: ['', [Validators.required]],
  //     numberOfRooms: ['', [Validators.required, Validators.pattern("[0-9]*$")]],
  //     noOfEmployes: ['', [Validators.required, Validators.pattern("[0-9]*$")]],
  //     acceptTerms: [false, Validators.requiredTrue],

  //   })
  // }


 async submit() {
    console.log(this.hotelRegistrationForm.value);
    if(this.isEditJourney){
   
   await this.dataServiceService.patchApiCall('hotelDetails',this.hotelRegistrationForm.value,this.editId).toPromise();
    }
    else{
      //regular journey
      this.dataServiceService.postApiCall(this.hotelEndPoint,this.hotelRegistrationForm.value).subscribe();
      alert("Your Hotel is register is Successfully on Our Portal")
    }
    this.router.navigateByUrl('/owner/loginsuccess');
  }


  journeyOfBack() {
    this.router.navigateByUrl('/owner/loginsuccess');
  }

  toggleShow() {
    this.show = !this.show
  }
  toggleHide() {
    this.show = false;
  }


  

}
