import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { GetApiService } from '../get-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.scss']
})
export class Search2Component implements OnInit {

  dishname: string;
  dishes: Dish[];
  n:number;

  constructor(private dishServices: GetApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let name1 = this.route.snapshot.params['id'];
    this.dishname=name1;
    console.log(this.dishname);
    this.dishServices.getcartitembyname(name1)
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
