import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
import { UserReport } from '../model/user-report';
import { UserDisplay } from '../model/user-display';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  //displayInfo : Array<UserDisplay> = new Array();
  players = [];
 userDisplay : Array<UserDisplay> = new Array();
  //userReport : UserReport = new UserReport();
  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    /*this.playerService.getAllPlayers().subscribe(data => {
    this.players = data;
    });
    console.log(this.players.length);
    this.players.forEach(player => {     
      this.playerService.getUserReport(player.playerId).subscribe(data => {
        var userReport: UserReport = new UserReport(data.winCount,data.lossCount);
        var userDisplay: UserDisplay = new UserDisplay(player,userReport);
        this.displayInfo.push(userDisplay);
      }); 
    });
    }
//this.userDisplay = this.displayInfo;
  displayedColumns: string[] = ['playerName'];//,'playerWinPercentage','playerLossPercentage']; */
  this.playerService.getAllPlayers().subscribe(data => {
    this.players = data;
  });
  }

}
