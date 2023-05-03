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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { RatingComponent } from './rating/rating.component';
import {MatListModule} from "@angular/material/list";
import { AdvicesComponent } from './advice/advices.component';
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {RecordService} from "./service/record.service";
import { HttpClientModule } from '@angular/common/http';
import { RecordsComponent } from './records/records.component';
import { RecordsListComponent } from './records/records-list/records-list.component';
import { RecordsAddComponent } from './records/records-add/records-add.component';
import { RecordsEditComponent } from './records/records-edit/records-edit.component';
import { RecordsInfoComponent } from './records/records-info/records-info.component';
import {NotificationsService} from "./service/notification.service";
import { SuccessComponent } from './snackbar-items/success/success.component';
import { ErrorComponent } from './snackbar-items/error/error.component';
import { WarningComponent } from './snackbar-items/warning/warning.component';
import {InfoComponent} from "./snackbar-items/info/info.component";

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
    RatingComponent,
    AdvicesComponent,
    RecordsComponent,
    RecordsListComponent,
    RecordsAddComponent,
        RecordsEditComponent,
        RecordsInfoComponent,
        SuccessComponent,
    ErrorComponent,
        WarningComponent,
  InfoComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatTableModule,
        MatTabsModule,
        MatProgressBarModule,
      HttpClientModule,
      MatSnackBarModule


    ],
  providers: [RecordService,NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
