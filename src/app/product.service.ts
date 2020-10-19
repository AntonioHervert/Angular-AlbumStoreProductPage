import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductService {

  private _http: Http;
  private _albymUrl = "../assets/album.json";

  constructor() { }

  getAlbum(id: number){
    return this._http.get(this._albymUrl).map(response=>{
      response.json();
    });  
  }


}

