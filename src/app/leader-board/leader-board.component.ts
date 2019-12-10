import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  players : Array<any>;
  constructor(private route: ActivatedRoute,
    private router: Router,private playerService : PlayerService) { }

  ngOnInit() {
    this.playerService.getLeaderBoardInfo().subscribe(data => {
      this.players = data;
    });
  }
}
