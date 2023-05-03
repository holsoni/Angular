import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,
              public snackBarRef:MatSnackBarRef<InfoComponent>) {
  }
  ngOnInit() {
  }
}

