import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import{Employee} from 'src/app/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
id :any;
data:any;
employee=new Employee;
  constructor(private route: ActivatedRoute ,private DataService:DataService, private router: Router){}
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getdata();
  }
  getdata() {
    this.DataService.getEmployeesById(this.id).subscribe(
      res=>{
        this.data=res;
        this.employee=this.data;
      }
    )
  }
  updateemployee(){
    this.DataService.updatemployee(this.id, this.employee).subscribe(
      res=>{        
      }
    )
    this.router.navigate(['/home/',this.id]);
  }
  
}