import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  title = 'BestRecreation.';
  userInfo = "Miss. S"

  greeting = {text: "Hello world!", show:false}
  show(){
    this.greeting.show = !this.greeting.show;
  }

  list = false;
  changeView(){
    this.list = !this.list
  }

  menu:any = [{label:"Best places to go", active:false},
    {label:"Blogs", active:false},
    {label:"Gallery", active:false},
    {label:"About", active:false},
    {label:"Contacts", active:false}];

/*
  users = [
    {
      id: 1,
      name: 'Victor',
      lastname: 'Velichko',
      dateOfBirth: new Date("2/1/1990"),
      salary: 50000,
      workingHours: 123456789
    },{
      id: 2,
      name: 'Anna',
      lastname: 'Melnyk',
      dateOfBirth: new Date("5/6/1997"),
      salary: 60000,
      workingHours: 300
    },{
      id: 3,
      name: 'Serhii',
      lastname: 'Bandura',
      dateOfBirth: new Date("12/11/2001"),
      salary: 35000,
      workingHours: 234
    },{
      id: 4,
      name: 'Hanna',
      lastname: 'Runykova',
      dateOfBirth: new Date("3/10/1998"),
      salary: 12000,
      workingHours: 100
    },{
      id: 5,
      name: 'John',
      lastname: 'Smith',
      dateOfBirth: new Date("8/12/1985"),
      salary: 75000,
      workingHours: 250
    },{
      id: 6,
      name: 'Sarah',
      lastname: 'Johnson',
      dateOfBirth: new Date("8/5/1992"),
      salary: 53000,
      workingHours: 140
    },{
      id: 7,
      name: 'David',
      lastname: 'Lee',
      dateOfBirth: new Date("2/17/1997"),
      salary: 90000,
      workingHours: 1834534520
    },{
      id: 8,
      name: 'Emily',
      lastname: 'Nguyen',
      dateOfBirth: new Date("5/28/1995"),
      salary: 55000,
      workingHours: 120000
    },{
      id: 9,
      name: 'Mia',
      lastname: 'Garcia',
      dateOfBirth: new Date("1/1/2000"),
      salary: 45000,
      workingHours: 500670000
    },{
      id: 10,
      name: 'Kate',
      lastname: 'Doe',
      dateOfBirth: new Date("6/6/1980"),
      salary: 88000,
      workingHours: 1000043400
    }];
*/

    ngOnInit(){
     // localStorage.setItem('users', JSON.stringify(this.users));
    }

}
