import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonService {

  constructor(private http:HttpClient) {}

   //To add data in DB
   insertEmployee(person:any){
    return this.http.post("http://localhost:8080/person/create", person);
  }
  
  //Request to get data from DB
  getEmployee(){
    return this.http.get("http://localhost:8080/person/get");
  }

  //Request to delete data from DB
  deleteUsers(personId:number){
    return this.http.delete("http://localhost:8080/person/delete/" +personId);
  }

  //Request to get data from DB by id
  getById(personId:number){
    return this.http.get("http://localhost:8080/person/get/" +personId);
  }

  //Request to update data from DB
  editUsers(id:number, person: any){
    return this.http.put("http://localhost:8080/person/update/" +id, person);
  }
}
