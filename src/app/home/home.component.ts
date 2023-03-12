import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  users:any[] = [];

  ngOnInit(){
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
  }
}
