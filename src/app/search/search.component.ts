import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from '../get-api.service';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  dishname: string;
  dishes: Dish[];
  n:number;

  constructor(private dishServices: GetApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let name1 = this.route.snapshot.params['id'];
    this.dishname=name1;
    console.log(this.dishname);
    this.dishServices.getdishes(name1)
    .subscribe
    (
      data=>
      {
        this.dishes=data;
        this.n=data.length;
        console.log(data.length);
      }
    );
  }
}
