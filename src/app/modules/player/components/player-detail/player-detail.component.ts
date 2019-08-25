import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DATE_LOCALE, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Player} from '../../model/player';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlayerService} from '../../player.service';
import {BOOL_TYPE} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],

})
export class PlayerDetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PlayerDetailComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Player, private formBuilder: FormBuilder, private playerService: PlayerService) {

  }

  ngOnInit() {
console.log("player");
console.log(this.data);
  }

  player=this.data;
  isAmateur=true;
  playerForm = this.formBuilder.group({
    lastName: [this.data.lastName,[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern("[a-zA-Z ]*")]],
    firstName: [this.data.firstName,[Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern("[a-zA-Z ]*")]],
    dateOfBirth: [new Date(this.data.dateOfBirth),[Validators.required]],
    permissionDate: [this.data.permissionDate],
    periodOfTheContract:["A-Amator"],
    lastClub:[this.data.lastClub],
    transferType:[this.data.lastClub],

  });

  submit(playerForm: FormGroup) {
    this.player = playerForm.value;
    this.player.id=this.data.id;
    console.log(this.player);
    if (this.player.id === undefined) {
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
