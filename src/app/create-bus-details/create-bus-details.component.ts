import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-bus-details',
  templateUrl: './create-bus-details.component.html',
  styleUrls: ['./create-bus-details.component.css']
})
export class CreateBusDetailsComponent implements OnInit{
  busDetails: BusDetails = new BusDetails();
  startingPoint: string = "";
    driverName: string = "";
    endingPoint: string = "";
    driverNumber:  number = 0;
    busId:  number = 0;
    busNumber: string = "";
    busType: string = "";
  constructor(private busDetailsService: BusDetailsService ,
    private router: Router) { }

  ngOnInit(): void {
  }
  requiredValue(){
    if(this.startingPoint === '' || this.driverName === '' || this.endingPoint === '' || this.driverNumber === 0||
     this.busId === 0|| this.busNumber === ''|| this.busType === '') {
      var status= confirm("Please fill all mandatory fields");
    }
   
   else{
    var status= confirm("Created Successfully");
    if (status==true) {
      this.router.navigate(['busDetails']);
         }
   }
  }

  saveBusDetails(){
    this.busDetailsService.createBusDetails(this.busDetails).subscribe( data =>{
      console.log(data);
      this.goToBusDetailsList();
    },
    error => console.log(error));
  }

  goToBusDetailsList(){
    this.router.navigate(['/busDetails']);
  }

  onSubmit(){
    console.log(this.busDetails);
    this.saveBusDetails();
  }
 
  /*create(){
    alert("Created Successfully!!!");
    this.router.navigate(['app-busDetails']);
  }*/
}

