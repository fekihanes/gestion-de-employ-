import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public from ={
    email:null,
    password:null
  }

  constructor(private route: ActivatedRoute ,private DataService:DataService, private router: Router){}

  ngOnInit(): void {
  
  }
  audioFile: string = 'assets/new_empolyee.mp3'; // Adjust the path to your audio file
  audioFile2: string = 'assets/old_empolyee.mp3'; // Adjust the path to your audio file

  playAudio(): void {
    const audio = new Audio(this.audioFile);
    audio.play();
    this.router.navigate(['/signup/']);

  }
  verif(): boolean {
    if (this.from.email == null || this.from.password == null) {
      return true;
    } else {
      return false;
    }
  }
  
  Submitlogin() {
    this.DataService.getID(this.from).subscribe((data: Object) => {
      const id = data as number; // Assuming the 'data' contains the 'id' as a number.
      if (id === -3) {
        alert("Account does not exist");
      } else if (id === -1) {
        alert("Check your password");
      } else {
        const audio = new Audio(this.audioFile2);
        audio.play();

        this.router.navigate(['/home/',id]);
      }
    });
  }
  
}

