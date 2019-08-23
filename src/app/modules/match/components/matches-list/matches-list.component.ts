import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Match} from '../../model/match';
import {ActivatedRoute, Router} from '@angular/router';
import {MatchService} from '../../match.service';


@Component({
  selector: 'app-maches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'shirtColor', 'date','players'];
  matches: Match[];
  dataSource: MatTableDataSource<Match>|null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router, private route: ActivatedRoute, private matchService: MatchService) {
  }

  ngOnInit() {
    let id = this.route.parent.snapshot.paramMap.get('id');
    console.log(id);

    this.matchService.findAllMatchesFromTeam(parseInt(id)).subscribe(data => {
        this.matches = data;
      },
      error => {
        console.log('Something is wrong' + error.toString());
      },
      () => {
        this.dataSource= new MatTableDataSource<Match>(this.matches);
        this.dataSource.paginator = this.paginator;
       });

  }

}
