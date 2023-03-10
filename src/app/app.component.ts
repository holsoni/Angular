import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

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


  data:any = [{
    name: "Goverla",
    place: "Zakarpattia",
    imgUrl:"https://karpatium.com.ua/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--672de41986b3eb3547d1cf8a50a6ac8ae4b3d4ba/%D0%B3%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0-%D0%B3%D0%BE%D1%80%D0%B0.jpeg?disposition=attachment",
    rating:"4.9 ",
    type:"1",
    visibility:true

  },
    {
      name: "Synevir Lake",
      place: "Zakarpattia",
      imgUrl:"https://jivavoda.com.ua/upload/blog/1_article-ozero.jpg",
      rating:"4.7",
      type:"1",
      visibility:true

    },
    {
      name: "Silver waterfalls",
      place: "Shesory",
      imgUrl:"https://kosiv.life/files_ci/561/caption__large.jpg",
      rating:"4.7",
      type:"2",
      visibility:true
    }]

}
