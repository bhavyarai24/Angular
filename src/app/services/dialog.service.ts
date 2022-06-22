import { Injectable } from '@angular/core';
import { container } from '@angular/core/src/render3/instructions';
import { MatDialog } from '@angular/material';
import { MatConfirmComponent } from '../mat-confirm/mat-confirm.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  opendialog(msg)
  {
    this.dialog.open(MatConfirmComponent,{
      width:'390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data:{
        message: msg
      }
    })
  }
}
