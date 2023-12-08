import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent {

  hotelBookNowForm!: FormGroup;
  bookingEndPoint = 'hotelBooking';
  endPoint: any;
  signInOrSignUp: any;
   // tandc: any;
  // editData: any;
  // Edit = true;
  // Menues = [
  //   { value: "Misal", option: "Misal", isActive: false },
  //   { value: "Kaju Curry", option: "Kaju Curry", isActive: false },
  //   { value: "Vej Pulav", option: "Vej Pulav", isActive: false }
  // ];

  constructor(private formBuilder: FormBuilder,
    private dataServiceService: DataServiceService,
    private router: Router){}

  ngOnInit(){
    // if(this.Edit){
    //   this.editData = {
    //     "TC": 
    //     "terms and conditions",
    //     " Menues":  ['Kaju Curry', 'Misal']
    //   }
    //   this.setMenuesCheckboxes()
     this.hotelBooking();
  }
  // else{
  //   console.log('this.editData',this.editData);
  //   this.hotelBooking();
  // }
  // this.endPoint = this.dataServiceService.endPoint;
  // console.log('this.signInOrSignUp --', this.signInOrSignUp);

// setMenuesCheckboxes(){
//   this.Menues.forEach(item=>{
//        this.editData.Menues.forEach((arrayItem:any)=>{
//       if(item.value == arrayItem){
//         item.isActive = true;
//       }
//     }
//     )
//   })
// }

  hotelBooking(){
    this.hotelBookNowForm = this.formBuilder.group({
      name: ['' , [Validators.required, Validators.minLength(2)]],
      address: ['' , [Validators.required, Validators.minLength(10)]],
      mobileNo: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      checkInn:['',[Validators.required,]],
      checkOut:['',[Validators.required,]],
      date:['',[Validators.required]],
      payment:['',[Validators.required]],

      // Menues: [''],
      // TC:[this.editData?.TC ? true :false]

    });
  }

  // setMenues(event: any, value: string) {
  //   console.log(event);
  //   console.log('value', event.source.value);

  //   if (event.checked) {
  //     this.Menues.forEach(item => {
  //       if (value == item.value) {
  //         item.isActive = true;
  //       }
  //     })
  //   }
  //   else {
  //     this.Menues.forEach(item => {
  //       if (value == item.value) {
  //         item.isActive = false;
  //       }
  //     })
  //   }

  //   console.log('Menues', this.Menues);

   
  // }

  // setValuesForForm() {
  //   let MenuesData: any = [];
  //   this.Menues.forEach(item => {
  //     if (item.isActive) {
  //       MenuesData.push(item.value)
  //     }
  //   })

  //   let updatedMenues = {
  //     name: this.hotelBookNowForm.value.name,
  //     Menues:  MenuesData,
  //     TC: this.tandc
  //   }
  //   this.hotelBookNowForm.setValue(updatedMenues);

  //   console.log('this.hotelBookNowForm-->final', this.hotelBookNowForm.value);

  // }

  // tcValue(event:any){
  // console.log(event.source.value);
  // this.tandc = event.source.value;

  // }



  submit(){
    // this.setValuesForForm()
    // console.log(this.hotelBookNowForm.value);
    this.dataServiceService.postApiCall(this. bookingEndPoint,this.hotelBookNowForm.value).subscribe();
    alert('Booking Successfully,Thank You...!');
    this.router.navigateByUrl('/user/loginsuccess');
}

}
