import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Promotion } from '../shared/promotion';
import { GetApiService } from '../get-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dishes: Dish[];
  dish: Dish;
  promotion: Dish;
  name: string;
  constructor(private dishservice: GetApiService, 
    private route:ActivatedRoute) { }

    ngOnInit() {
      this.name='Pizza';
      this.dishservice.getdishes(this.name)
      .subscribe
      (
        data=>
        {
          this.dishes=data;
          this.dish=this.dishes[0];
          console.log(this.name);
          console.log(data);
          this.promotion=this.dishes[0];
        }
      );
    }
  

}
