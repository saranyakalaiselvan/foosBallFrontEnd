import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Array<any>;
  constructor(private route: ActivatedRoute,
    private router: Router,private playerService : PlayerService) { }

  ngOnInit() {
    this.playerService.getAllGames().subscribe(data => {
      this.games = data;
    });
  }
}
