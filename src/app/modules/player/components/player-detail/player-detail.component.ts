import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Player} from '../../model/player';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PlayerService} from '../../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlayerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Player, private formBuilder: FormBuilder, private playerService: PlayerService) {

  }

  ngOnInit() {

  }

  player=this.data;
  playerForm = this.formBuilder.group({
    lastName: [this.data.lastName],
    firstName: [this.data.firstName],
    dateOfBirth: [new Date(this.data.dateOfBirth)],
    permissionDate: [this.data.permissionDate]
  });

  submit(playerForm: FormGroup) {
    this.player = playerForm.value;
    this.player.id=this.data.id;
    console.log(this.player);
    if (this.player.id === null) {
      this.playerService.savePlayer(this.player).subscribe(data => {
        console.log(data);
      });
    } else {
      this.playerService.updatePlayer(this.player).subscribe(data => {
        console.log(data);
      });
    }
  }
}
