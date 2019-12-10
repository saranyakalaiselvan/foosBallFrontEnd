import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule, MatSelectModule, MatSidenavModule, MatTableModule } from '@angular/material';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchSelectorComponent } from './match-selector/match-selector.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { GameComponent } from './game/game.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { CommonModule } from '@angular/common';
import { UserComparisonReportComponent } from './user-comparison-report/user-comparison-report.component';
import { UserReportComponent } from './user-report/user-report.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    EditPlayerComponent,
    MatchSelectorComponent,
    LeaderBoardComponent,
    GameComponent,
    GameDisplayComponent,
    UserComparisonReportComponent,
    UserReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule ,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    CommonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
