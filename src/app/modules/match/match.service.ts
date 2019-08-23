import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Match} from './model/match';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url="http://localhost:4200";
  constructor(private http:HttpClient) { }

  findAllMatchesFromTeam(id: number):Observable<Match[]>{
    return this.http.get<Match[]>(this.url+"/matches");
  }
}
