import { Injectable } from '@angular/core';
import { CountsService } from './counts.service';
@Injectable()
export class ManageActInacUsersService {

  constructor(  private conterService: CountsService) { }

  activeUsers :string[]= ['Max', 'Anna'];
  inactiveUsers :string[] = ['Chris', 'Manu'];

  onSetToInactive(id: number) :any {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.conterService.incrementalActiveToInactive()
    
  }

  onSetToActive(id: number) :any {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

}
