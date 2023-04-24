import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutheticationService } from '../authentication.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  constructor(private router: Router,
    private loginservice: AutheticationService){}
  
    ngOnInit() {
       }
  feedback(){
    var status= confirm("Thankyou for your valuable Feedback!!!");
     if (status==true) {
       this.router.navigate(['app-homepage']);
          }
}
}