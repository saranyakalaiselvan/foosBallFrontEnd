import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {
  playersList: any;
  player1 : any;
  playerInfo :any;
  constructor( private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(data => {
      this.playersList = data;
    });
  }

  dataChanged(event){
    this.playerService.getUserReport(event.playerId).subscribe(data =>{
      this.playerInfo = data;
    });
  }



}
