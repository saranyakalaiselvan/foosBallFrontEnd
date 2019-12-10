import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player/player.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  player: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.playerService.get(id).subscribe((player: any) => {
          if (player) {
            this.player = player;
            //this.player.href = player.playerId;
          } else {
            console.log(`Player with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/players']);
  }

  save(form: NgForm) {
    this.playerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(form: NgForm) {
    this.playerService.remove(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
