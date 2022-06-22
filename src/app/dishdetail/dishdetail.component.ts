import { Component, OnInit,Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {GetApiService} from '../get-api.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  dish:Dish[];
  constructor(private dishservice: GetApiService,
    private route: ActivatedRoute,
    private location: Location)  { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.dishservice.getdish(id)
    .subscribe
    (
      data=>
      {
        this.dish=data
        //console.log(this.dish.name);
        //console.log(this.dish);
        //console.log(data.id);
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
}
