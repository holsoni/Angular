import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {SuccessComponent} from "../snackbar-items/success/success.component";
import {ErrorComponent} from "../snackbar-items/error/error.component";
import {WarningComponent} from "../snackbar-items/warning/warning.component";
import {InfoComponent} from "../snackbar-items/info/info.component";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccessMessage(displayedMessage: string): void {
   /* const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['snackbar-success']
    };
    this.snackBar.open(message, "https://cdn-icons-png.flaticon.com/512/845/845646.png", config);
    */
    this.snackBar.openFromComponent(SuccessComponent,{
      data:{
        message:displayedMessage,
        buttonText:"okay"
      },
      horizontalPosition:"center",
      verticalPosition:"bottom",
      panelClass:'success'
    })

  }

  showErrorMessage(displayedMessage: string): void {
   /* const config: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['error-snackbar']
    };

    this.snackBar.open(message, "https://cdn-icons-png.flaticon.com/512/9426/9426995.png", config);*/
    console.log("EROORRRRRRRR");
    this.snackBar.openFromComponent(ErrorComponent,{
      data:{
        message:displayedMessage,
        buttonText:"okay"
      },
      duration:5000,
      horizontalPosition:"center",
      verticalPosition:"bottom",
      panelClass:'error'
    })
  }

  showWarningMessage(displayedMessage: string): void {
    this.snackBar.openFromComponent(WarningComponent,{
      data:{
        message:displayedMessage
      },
      duration:5000,
      horizontalPosition:"center",
      verticalPosition:"bottom",
      panelClass:'warning'
    })
  }

  showInfoMessage(displayedMessage: string): void {
    this.snackBar.openFromComponent(InfoComponent,{
      data:{
        message:displayedMessage,
        buttonText:"okay"
      },
      duration:5000,
      horizontalPosition:"center",
      verticalPosition:"bottom",
      panelClass:'warning'
    })}
}
