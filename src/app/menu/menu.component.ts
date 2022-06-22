import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import {GetApiService} from '../get-api.service';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;
  selectedval:Number;

  searchedTerm: string;
  count: number;
  cartdata: Dish;
  msg:string;


  //constructor(private dishServices: DishService) { }
  constructor(private dishServices: GetApiService,
    private route:ActivatedRoute, private notif: NotificationService,private dialog: DialogService) { 
  }

  /*ngOnInit() {
    this.dishes= this.dishServices.getDishes();
  }*/

  ngOnInit(){
  /*  this.route.params.subscribe(params=>{
      if(params.searchTerm)
      this.searchedDishes=this.dishServices.apicall().filter(searchedDishes=>
        searchedDishes.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
    })*/
    this.dishServices.apicall()
    .subscribe
    (
      data=>
      {
        this.dishes=data
        //console.log(data);
      }
    );
  }

  /*onSelect(dish:Dish)
  {
    this.selectedDish=dish;
  }*/

  /*search(dishname:string)
  {
    this.searchedTerm=dishname;
  }*/

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
            this.msg='Item addedd successfully';
            this.dialog.opendialog(this.msg);
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
}
