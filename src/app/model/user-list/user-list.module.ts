import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDisplay } from '../user-display';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserListModule { 
  private userDisplays :  Array<UserDisplay>;
  constructor(){
    
  }
}
