import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http: HttpClient
  ) { }

  apicall():Observable<any>
  {
    return this.http.get('https://sample-rest112.herokuapp.com/api/menu');
  }

  getdish(id):Observable<any>
  {
    return this.http.get('https://sample-rest112.herokuapp.com/api/menu/'+id);
  }

  getdishes(name):Observable<any>
  {
    return this.http.get('https://sample-rest112.herokuapp.com/api/menu?name='+name);
  }

  putaddtocart(id,cartdata): Observable<any>
  {
    return this.http.put('https://sample-rest112.herokuapp.com/api/menu/'+id,cartdata);
  }

  getcartitem():Observable<any>
  {
    return this.http.get('https://sample-rest112.herokuapp.com/api/menu/cart/cartitem');
  }
  deleteitem(id):Observable<any>
  {
    return this.http.delete('https://sample-rest112.herokuapp.com/api/menu/'+id);
  }

  getcartitembyname(name):Observable<any>
  {
    return this.http.get('https://sample-rest112.herokuapp.com/api/menu/cart/cartitem/name/'+name);
  }
}
