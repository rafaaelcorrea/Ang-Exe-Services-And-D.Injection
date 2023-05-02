import { Component , ElementRef, OnInit, ViewChild} from '@angular/core';
import { ManageActInacUsersService } from './manage-act-inac-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{  
  activeUsers!:string[];
  inactiveUsers!:string[];
  inputUser!: string;
  @ViewChild('message') message!: ElementRef;
 selectedValue!: string;

  constructor( private usersService: ManageActInacUsersService) {}
  
  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    
  }

  sendUser( ){
    
  if (this.selectedValue === 'activeUsers' && this.activeUsers.includes(this.inputUser) === false){
      this.activeUsers.push(this.inputUser);
   } else if ( this.selectedValue === 'inactiveUsers'  && this.inactiveUsers.includes(this.inputUser) === false) {
    this.inactiveUsers.push(this.inputUser);
   } else {
      console.log(this.message.nativeElement.id)
      this.message.nativeElement.style.removeProperty('display:none');

  }

  }


}
