import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutComponent} from "./about/about.component";
import {BlogsComponent} from "./blogs/blogs.component";
import {HomeComponent} from "./home/home.component";
import { HoursPipePipe } from './hours-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    BlogsComponent,
    PageNotFoundComponent,
    HoursPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
