import { Component , Output , Input , EventEmitter } from '@angular/core';
import { ManageActInacUsersService } from '../manage-act-inac-users.service';
@Component({
  selector: 'app-inacitve-users-component',
  templateUrl: './inacitve-users-component.component.html',
  styleUrls: ['./inacitve-users-component.component.css']
})
export class InacitveUsersComponentComponent {

  constructor( private methodService: ManageActInacUsersService){}
  @Input() users!: string[];
  //@Output() userSetToActivate = new EventEmitter<number>();


  onSetToActive(id: number): any{
    this.methodService.onSetToActive(id);
  }



}
