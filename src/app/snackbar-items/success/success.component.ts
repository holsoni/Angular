import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit{

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any, public snackBarRef:MatSnackBarRef<SuccessComponent>) {
  }
  ngOnInit() {
  }
}
