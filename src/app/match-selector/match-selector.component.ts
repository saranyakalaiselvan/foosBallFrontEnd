import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlayerService } from '../player/player.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GameInfo } from '../model/game-info.model';

@Component({
  selector: 'app-match-selector',
  templateUrl: './match-selector.component.html',
  styleUrls: ['./match-selector.component.css']
})
export class MatchSelectorComponent implements OnInit {

  form : FormGroup;
  gameType: any;
  gameTpeVal : boolean;
  private gameTypes : any ;
  savePlayer : GameInfo = new GameInfo();
  playersList: Array<any> = [];
  player1 : any;
  player2: any;
  player3: any;
  player4 : any;
  winner1 : BigInteger;
  winner2 : BigInteger;
  winnerTeamName : String;
  playerIds : Array<BigInteger> =[];
  matchPlayers = new Map<any,any>();
  teamPlayers = new Map<String,Map<String,any>>();
  selectedPlayers : Array<any> = [];
  selectedTeamPlayers : Array<any> = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) { 
    this.form = this.formBuilder.group({
      gameTypes: ['']
    });
    this.gameTypes = this.getGameTypes();
  }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(data => {
      this.playersList = data;
    });
  }

  getGameTypes() {
    return [
      { id: '1vs1', name: 'One vs One' },
      { id: '1vs2', name: 'One vs Two' },
      { id: '2vs2', name: 'Two vs Two' }
    ];
  }

  gameTypeSelection(){
    this.player1 = this.player2 = this.player3 = this.player4 = '';
    this.matchPlayers.clear();
    this.teamPlayers.clear();
    this.selectedPlayers =[];
  }

  dataChanged(teamName,selectorName,player){
    if(!Array.from(this.matchPlayers.values()).includes(player)){
      this.matchPlayers.set(selectorName,player);
      if(this.teamPlayers.size === 0){
        let selectedPlayerMap = new Map();
        selectedPlayerMap.set(selectorName,player);
        this.teamPlayers.set(teamName,selectedPlayerMap);
      }else{
        if(this.teamPlayers.get(teamName)){
          let existingSelectedPlayerMap = this.teamPlayers.get(teamName);
            existingSelectedPlayerMap.set(selectorName,player);
          this.teamPlayers.set(teamName,existingSelectedPlayerMap);
        }else{
          let selectedPlayerMap = new Map();
          selectedPlayerMap.set(selectorName,player);
          this.teamPlayers.set(teamName,selectedPlayerMap);
        }
      }
    }
  this.selectedPlayers = Array.from(this.matchPlayers.values());
  }
  matchDetailsSubmit(){
    let values = Array.from(this.selectedPlayers.values());
    values.forEach(player => {
      this.playerIds.push(player.playerId);
    });
    var selectedTeamPlayers = new Map<String,any>() ;
    selectedTeamPlayers = this.teamPlayers.get(this.winnerTeamName);
    var winnerPlayerIds : Array<any> =[];
    for (let player of selectedTeamPlayers.values()) {
      winnerPlayerIds.push(player.playerId);             
    }
    if(winnerPlayerIds.length > 1){
      this.winner2 = winnerPlayerIds.pop();
      this.winner1 =winnerPlayerIds.pop();
    } else{
      this.winner1 = winnerPlayerIds.pop();
    }
    this.savePlayer.playersIds = this.playerIds;
    this.savePlayer.winner1Id = this.winner1;
    this.savePlayer.winner2Id = this.winner2;

   
      this.playerService.saveGame(this.savePlayer).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
   }

  gotoList() {
    this.router.navigate(['/games']);
  } 
}
