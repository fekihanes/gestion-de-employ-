import { Component, OnInit } from '@angular/core';
import{Employee} from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
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
  deletedata(id:any){
    this.DataService.deletedata(id).subscribe(res => {
    })
    this.DataService.suppruser(id).subscribe(res => {
    })

    this.router.navigate(['']);
  }
}
