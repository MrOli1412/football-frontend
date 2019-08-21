import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Player} from './model/player';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private url="http://localhost:4200";
  constructor(private http:HttpClient) { }

  getAllPlayersFromTeam(id:number):Observable<Player[]>{
    return this.http.get<Player[]>(this.url+"/players");
  }
}
