import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AcitveUsersComponentComponent } from './acitve-users-component/acitve-users-component.component';
import { InacitveUsersComponentComponent } from './inacitve-users-component/inacitve-users-component.component';
import { ManageActInacUsersService } from './manage-act-inac-users.service';
import { CountsService } from './counts.service';

@NgModule({
  declarations: [
    AppComponent,
    AcitveUsersComponentComponent,
    InacitveUsersComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ManageActInacUsersService , CountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
