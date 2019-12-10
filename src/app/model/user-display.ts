import { UserReport } from './user-report';

export class UserDisplay {
    player: any =[];
    userReport : UserReport;
  
    constructor(player:any,userReport : UserReport) {
        this.player = player;
        this.userReport = userReport;
      }
}
