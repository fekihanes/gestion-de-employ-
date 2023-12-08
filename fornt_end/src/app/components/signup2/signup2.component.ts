import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component {
  constructor(private route: ActivatedRoute ,private DataService:DataService, private router: Router){}
  ngOnInit(): void {
  
  }
  public form ={
    email:null,
    password:null
  }
  audioFile2: string = 'assets/old_empolyee.mp3';
  verif(): boolean {
    if (this.form.email == null || this.form.password == null) {
      return true;
    } else {
      return false;
    }
  }
  addeuser(){
    this.DataService.existe(this.form).subscribe((data: Object) => {
      const id = data as number; // Assuming the 'data' contains the 'id' as a number.
      if (id === -1) {
        alert("Account exist");
      } else {
        this.DataService.adduser(this.form).subscribe(
          res=>{        
          }
        )
        this.DataService.getID(this.form).subscribe((data: Object) => {
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
  });
  }
}

