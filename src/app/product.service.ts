import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

import { Album } from './album';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  private _albumUrl = '../assets/album.json';

  getAlbum(id:number): Observable<Album> {
    return this._http.get(this._albumUrl)
    .pipe(map(res => <Album>res.json()));


  }

}
