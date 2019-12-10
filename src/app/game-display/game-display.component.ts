import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {
  sub: Subscription;
  game: any = {};
  playerNames =[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) { }

  ngOnInit() {
    
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.playerService.getGameById(id).subscribe((game: any) => {
          if (game) {
            this.game = game;
            this.game.href = game.gameId;
            if(game.winner1){
              this.playerService.get(game.winner1).subscribe(
                (player : any) => {
                  this.playerNames.push(player.playerName);
                }
              );
            }
            if(game.winner2){
              this.playerService.get(game.winner2).subscribe(
                (player : any) => {
                  this.playerNames.push(player.playerName);
                }
              );
            }
          } else {
            console.log(`Player with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/games']);
  }

}
