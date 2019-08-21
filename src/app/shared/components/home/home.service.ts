import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Club} from '../../models/club';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url="http://localhost:4200";
  constructor(private http:HttpClient) { }

  getAllTeams():Observable<Club> {
    return this.http.get<Club>(this.url+"/club");
  }
}
