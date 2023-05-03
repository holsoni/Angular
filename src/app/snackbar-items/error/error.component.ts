import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any,
              public snackBarRef:MatSnackBarRef<ErrorComponent>) {
  }
  ngOnInit() {
  }
}

