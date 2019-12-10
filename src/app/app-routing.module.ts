import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { MatchSelectorComponent } from './match-selector/match-selector.component';
import { GameComponent } from './game/game.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { UserComparisonReportComponent } from './user-comparison-report/user-comparison-report.component';
import { UserReportComponent } from './user-report/user-report.component';


const routes: Routes = [
  { 
    path: '', redirectTo: '/players', pathMatch: 'full'
  },
  {
    path: 'games',
    component: GameComponent
  },
  {
    path: 'players',
    component: PlayerComponent
  },
  {
    path: 'addPlayer',
    component: EditPlayerComponent
  },
  {
    path: 'editPlayer/:id',
    component: EditPlayerComponent
  },
  {
    path: 'gameType',
    component: MatchSelectorComponent
  },
  {
    path: 'getGameById/:id',
    component: GameDisplayComponent
  },
  {
    path: 'leaderBoard',
    component: LeaderBoardComponent
  },
  {
    path: 'userComparisonReport',
    component: UserComparisonReportComponent
  },
  {
    path: 'userReport',
    component: UserReportComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
