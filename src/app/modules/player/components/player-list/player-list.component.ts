import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {Player} from '../../model/player';
import {PlayerService} from '../../player.service';
import {PlayerDetailComponent} from '../player-detail/player-detail.component';
import {UploadPlayersComponent} from '../upload-players/upload-players.component';



@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'dateOfBirth'];
  players:Player[];
  dataSource :MatTableDataSource<Player>|null;
  player:Player = new Player();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router:Router,private route:ActivatedRoute,private playerService:PlayerService,public dialog:MatDialog){}

  ngOnInit() {
    let id = parseInt(this.route.parent.snapshot.paramMap.get("id"));
    this.playerService.getAllPlayersFromTeam(id).subscribe(data=>{
      this.players=data;
    },
      error => {},
      ()=>{
        this.dataSource= new MatTableDataSource<Player>(this.players);
        this.dataSource.paginator= this.paginator;

      }
    )
  }


  openDialog(player:Player) {
    const dialogRef = this.dialog.open(PlayerDetailComponent,
      {data:player});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    },
      error => {},
      ()=>{console.log(this.players)}
    );
  }

  uploadFile() {
    const dialogRef = this.dialog.open(UploadPlayersComponent,);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
