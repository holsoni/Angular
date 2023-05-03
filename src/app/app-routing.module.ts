import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {BlogsComponent} from "./blogs/blogs.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutComponent} from "./about/about.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {RatingComponent} from "./rating/rating.component";
import {AdvicesComponent} from "./advice/advices.component";
import {RecordsListComponent} from "./records/records-list/records-list.component";
import {RecordsAddComponent} from "./records/records-add/records-add.component";
import {RecordsComponent} from "./records/records.component";
import {RecordsEditComponent} from "./records/records-edit/records-edit.component";
import {RecordsInfoComponent} from "./records/records-info/records-info.component";


const routes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'blogs/:id', component: BlogsComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'advice', component: AdvicesComponent },
  { path: 'records', component: RecordsComponent,children:[
      {path:'list',component:RecordsListComponent},
      { path: 'update/:id', component: RecordsEditComponent },
      {path:'details/:id',component:RecordsInfoComponent},
      {path:'add',component:RecordsAddComponent}]},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**',  component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
