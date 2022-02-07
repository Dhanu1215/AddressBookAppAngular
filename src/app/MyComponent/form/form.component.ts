import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/person';
import { PersonService } from 'src/app/person.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Object to store data 
  person = new Person('', '', '', 0, '', '', '', '', '', '')

  constructor(private router: Router, private service: PersonService, private route: ActivatedRoute) { }

  //To get id
  id: number = this.route.snapshot.params['personId'];

  ngOnInit(): void {
    //Get data by id API
    this.service.getById(this.id).subscribe((data: any) => {
      this.person = data.data;
      this.person.firstName = data.data.firstName;
      this.person.lastName = data.data.lastName;
      this.person.gender = data.data.gender;
      this.person.phoneNum = data.data.phoneNum;
      this.person.email = data.data.email;
      this.person.city = data.data.city;
      this.person.state = data.data.state;
      this.person.country = data.data.country;
      this.person.address = data.data.address;
      this.person.profilePic = data.data.profilePic;
    })
  }

  //function to post the data to DB
  onSubmit() {
    console.log(this.person);
    this.service.insertEmployee(this.person).subscribe(data => {
      console.log(data);
      this.router.navigate(['dashboard']);
    })
    alert("Form Submitted");
  }

  //Function to go on home screen
  onClick() {
    this.router.navigate([''])
  }

  //Edit data by Id
  handleUpdate() {
    this.service.editUsers(this.id, this.person).subscribe(data => {
      this.router.navigate(['dashboard']);
    });

  }
}

