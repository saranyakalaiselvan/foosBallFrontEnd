import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public API = '//localhost:8080';
  public PLAYER_API = this.API + '/players';
  public GAME_API = this.API +'/games'

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.http.get(this.PLAYER_API);
  }

  get(id: string) {
    return this.http.get(this.PLAYER_API + '/' + id);
  }

  save(player: any): Observable<any> {
    return this.http.post(this.PLAYER_API, player);  
  }

  remove(player: any): Observable<any>  {
    return this.http.request('delete', this.PLAYER_API, { 
      body: {
        "playerId":player.playerId,
        "playerName" : player.playerName
      } 
    });

  }

  saveGame(savePlayer: any) : Observable<any>  {
    return this.http.post(this.GAME_API,savePlayer);
  }

  getAllGames(): Observable<any> {
    return this.http.get(this.GAME_API);
  }

  getGameById(id : String): Observable<any> {
    return this.http.get(this.GAME_API + '/' + id);
  }

  getLeaderBoardInfo() : Observable<any> {
    return this.http.get(this.PLAYER_API +"/leaderBoard");
  }

  getUserReport(id : String): Observable<any>{
    return this.http.get(this.GAME_API+'/report/'+id);
  }

  generateComparisonReport(id1,id2) {
    return this.http.get(this.GAME_API+'/compareReport/'+id1+'/'+id2);
  }
}
