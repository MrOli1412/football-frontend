import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public teamId;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.teamId = id;
  }

  showPlayers() {
    this.router.navigate(['players'],{relativeTo:this.route})
  }

  showMatches() {
    this.router.navigate(['matches'],{relativeTo:this.route})

  }

  showStatistics() {
    this.router.navigate(['statistics'],{relativeTo:this.route})

  }
}
