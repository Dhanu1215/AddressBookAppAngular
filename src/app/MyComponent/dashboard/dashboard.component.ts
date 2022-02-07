import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //object to store data
  contact: any;

  constructor(private router: Router, private service: PersonService) { }

  ngOnInit(): void {
    //Get API to get data from DB in table
    this.service.getEmployee().subscribe(data => {
      console.log(data);
      this.contact = data;
    })
  }

  //function to go on form page
  addEmployees() {
    this.router.navigate(['form'])
  }

  //fuction to get data by id from DB and show it on form page
  edit(personId: number) {
    this.router.navigate(['form', personId]);
  }

  //function to delete data from DB
  remove(personId: number) {
    if (confirm('Do you want to delete this employee?')) {
      console.log(personId);
      this.service.deleteUsers(personId).subscribe(data => {
        this.service.getEmployee();
        alert("Employee data deleted.");
        window.location.reload();
      })
    }
  }
}
