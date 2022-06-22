import { Component, OnInit,Inject } from '@angular/core';
import { GetApiService } from '../get-api.service';
import { Dish } from '../shared/dish';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartitem: Dish[];
  msg:string;

  constructor(private dialogservice:DialogService,private dishServices: GetApiService,public dialog:MatDialog) { }

  ngOnInit() {
    this.dishServices.getcartitem()
    .subscribe
    (
      data=>
      {
        /*for(let i=0;i<data.length;i++)
        {
          if(data[i].count>0)
          this.cartitem.push(data[i]);
        }
        console.log(this.cartitem);*/
        this.cartitem=data;
      }
    );
  }

  addtocart(id)
  {
    this.dishServices.getdish(id)
    .subscribe(
      data1=>
      {
        data1.count++;
        console.log(id);
        console.log(data1.count);
        this.dishServices.putaddtocart(id,data1)
        .subscribe(
          data2=>
          {
            console.log(data2);
            this.dishServices.getcartitem()
            .subscribe(
              data=>
              {
                this.cartitem=data;
                this.msg='Cart Updated Successfully';
                this.dialogservice.opendialog(this.msg);
              }
            )
          }
        );
      }
    )
  }

  removefromcart(id)
  {
    this.dishServices.getdish(id)
    .subscribe(
      data1=>
      {
        if(data1.count>0)
        {
          data1.count--;
          console.log(id);
          console.log(data1.count);
          this.dishServices.putaddtocart(id,data1)
          .subscribe(
            data2=>
            {
              console.log(data2);
              this.dishServices.getcartitem()
              .subscribe(
              data=>
              {
                this.cartitem=data;
                this.msg='Cart Updated Successfully';
                this.dialogservice.opendialog(this.msg);
              }
            )
            }
          );
        }
        else
        {
          console.log("item doesn't exist");
        }
      }
    )
  
  }

  remove(id)
  {
    this.dishServices.getdish(id)
    .subscribe(
      data1=>
      {
        data1.count=0;
        console.log(id);
        console.log(data1.count);
        this.dishServices.putaddtocart(id,data1)
        .subscribe(
          data2=>
          {
            console.log(data2);
            this.dishServices.getcartitem()
            .subscribe(
              data=>
              {
                this.cartitem=data;
                this.msg='Item removed successfully';
                this.dialogservice.opendialog(this.msg);
              }
            )
          }
        );
      }

    )
  }
  

}
