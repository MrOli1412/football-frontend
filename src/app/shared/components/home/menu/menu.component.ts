import { Component, OnInit } from '@angular/core';
import {Club} from '../../../models/club';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  club:Club;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getAllTeams().subscribe(data=>{
        console.log(data);
        this.club=data;
      },
      error => {
        console.log("Something is wrong");
      })
  }

}
