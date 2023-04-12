import { Component , EventEmitter, Input, Output } from '@angular/core';
import { ManageActInacUsersService } from '../manage-act-inac-users.service';
@Component({
  selector: 'app-acitve-users-component',
  templateUrl: './acitve-users-component.component.html',
  styleUrls: ['./acitve-users-component.component.css']
})
export class AcitveUsersComponentComponent {

  constructor( private methodService: ManageActInacUsersService ){}
  
  @Input() users!: string[];
  //@Output() userSetToInactive = new EventEmitter<number>();

  onSetToInactive( id: number) :any{
  this.methodService.onSetToInactive(id);
  }

}
