import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {requiredFileType} from '../../../../shared/validators/fileTypeValidator';
import {PlayerService} from '../../player.service';

@Component({
  selector: 'app-upload-players',
  templateUrl: './upload-players.component.html',
  styleUrls: ['./upload-players.component.css']
})
export class UploadPlayersComponent implements OnInit {

  file:File =null;
  constructor(private fb: FormBuilder,private playerService:PlayerService) {
  }

  ngOnInit() {
  }


  uploadPlayers = this.fb.group({
    pdf: [null,[Validators.required,requiredFileType('pdf')]]
  });


  submit() {
    this.playerService.uploadPlayers(this.file).subscribe(data=>{
      console.log(data);
    });
  }

  selectFile(files:FileList) {

  }

  getFile(){
    return this.uploadPlayers.get("pdf");
  }
}
