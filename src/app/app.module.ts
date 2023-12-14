import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule } from '@angular/forms';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { ClientserveService } from './clientserve.service';
import { MeetingserveService } from './meetingserve.service';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [BrowserModule ,FormsModule],
  declarations: [ 
    AppComponent,BrowserModule,FormsModule,CommonModule, AddClientComponent,AddMeetingComponent,ClientListComponent,MeetingListComponent],
    providers:[ClientserveService,MeetingserveService, ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }