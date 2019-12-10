import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-user-comparison-report',
  templateUrl: './user-comparison-report.component.html',
  styleUrls: ['./user-comparison-report.component.css']
})
export class UserComparisonReportComponent implements OnInit {
  matchPlayers =new Map<any,any>();
  private playersList :  Array<any> = new Array();
  selectedPlayers : Array<any> = [];
  playersWincount : any ;
  player1 : any =[];
  player2: any =[];
  player1Wincount :BigInteger;
  player2WinCount : BigInteger;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) { }


  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(data => {
      this.playersList = data;
    });
  }
  dataChanged(selectorName,player){
    if(!Array.from(this.matchPlayers.values()).includes(player)){
      this.matchPlayers.set(selectorName,player);
      this.selectedPlayers = Array.from(this.matchPlayers.values());

    }
  }

  generateComparisonReport(){
    this.playerService.generateComparisonReport(this.player1.playerId,this.player2.playerId).subscribe(data =>{
      this.playersWincount = data ;
    });
  }
}
