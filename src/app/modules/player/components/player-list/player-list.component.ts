import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Player} from '../../model/player';
import {PlayerService} from '../../player.service';



@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'dateOfBirth'];
  players:Player[];
  dataSource :MatTableDataSource<Player>|null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router:Router,private route:ActivatedRoute,private playerService:PlayerService){}

  ngOnInit() {
    let id = parseInt(this.route.parent.snapshot.paramMap.get("id"));
    console.log(id);
    this.playerService.getAllPlayersFromTeam(id).subscribe(data=>{
      this.players=data;
    },
      error => {},
      ()=>{
        this.dataSource= new MatTableDataSource<Player>(this.players)
        this.dataSource.paginator= this.paginator;

      }
    )
  }


}
