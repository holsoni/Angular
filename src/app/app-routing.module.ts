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


const routes: Routes =[
  { path: 'home', component: HomeComponent},
  { path: 'blogs/:id', component: BlogsComponent},
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'advice', component: AdvicesComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**',  component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
