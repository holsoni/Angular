import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{


  user:any = [];
  id:any = 0;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      let id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      console.log(id);
      // @ts-ignore
     this.user = JSON.parse(localStorage.getItem("users")).find(users => users.id == id);
      console.log(this.user);
    this.getData();
    }

  getData(){
    console.log('hello');
    console.log(this.user);
  }



}
