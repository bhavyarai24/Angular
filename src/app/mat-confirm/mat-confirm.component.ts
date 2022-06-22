import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-mat-confirm',
  templateUrl: './mat-confirm.component.html',
  styleUrls: ['./mat-confirm.component.scss']
})
export class MatConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogref: MatDialogRef<MatConfirmComponent>) { }

  ngOnInit() {
  }

  CloseDialog()
  {
    this.dialogref.close();
  }
}
