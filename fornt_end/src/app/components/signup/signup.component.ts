
import{Employee} from 'src/app/employee';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {DomSanitizer , SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  employee=new Employee;
  audioUrl: SafeResourceUrl = '';


  constructor(private route: ActivatedRoute ,private DataService:DataService, private router: Router,private sanitizer: DomSanitizer){}

  ngOnInit(): void {
      const audioPath = 'new_empolyee.mp3'; // Replace with the actual path to your audio file in the assets folder
      this.audioUrl = this.sanitizer.bypassSecurityTrustResourceUrl(audioPath);
    
    
  }
  isValidEmployee(): boolean {
    if (
      this.employee.name == null ||
      this.employee.email == null ||
      this.employee.phone == null ||
      this.employee.description == null
    ){
      return true;
    }else{
      return false;
    }
  }
  isEmail(input: string): boolean {
    return /\S+@\S+\.\S+/.test(input);
  }
 isValidPhoneNumber(input: string): boolean {
    const phoneNumberRegex: RegExp = /^[9|5|4|2]\d{7}$/;
    return phoneNumberRegex.test(input);
  }
  
  

  addeemployee(){
    if(this.isEmail(this.employee.email)==true){
      if(this.isValidPhoneNumber(this.employee.phone)==true){
        this.DataService.addeemployee(this.employee).subscribe(
          res=>{        
          }
        )
        this.router.navigate(['/signup2']);
      }else{
        alert("The phone number is not valid.")
      }
  }else{
    alert("The email address is invalid.");
  }
  }
}

