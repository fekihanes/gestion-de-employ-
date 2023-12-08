import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Employee } from '../employee';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private HttpClient:HttpClient) { }
  getData(){
    return this.HttpClient.get('Http://127.0.0.1:8000/api/employees');
  }
  deletedata(id:any){
    return this.HttpClient.delete('Http://127.0.0.1:8000/api/suppremployee/'+id);
  }
  getEmployeesById(id:any){
    return this.HttpClient.get('Http://127.0.0.1:8000/api/employee/'+id);
  }
  updatemployee(id:any,data :Employee){
    return this.HttpClient.put('Http://127.0.0.1:8000/api/updateemployee/'+ id , data);
  }
  addeemployee(data :Employee){
    return this.HttpClient.post('http://127.0.0.1:8000/api/addemployee/', data);
    
  }
  adduser(data :User){
    return this.HttpClient.post('http://127.0.0.1:8000/api/adduser/', data);
    
  }
  getID(data :User){
    return this.HttpClient.post('http://127.0.0.1:8000/api/getID/', data);
    
    
  }
  existe(data :User){
    return this.HttpClient.post('http://127.0.0.1:8000/api/existe/', data);
    
  }
  suppruser(id :any){
    return this.HttpClient.delete('http://127.0.0.1:8000/api/suppruser/'+ id);
    
  }
  

}
