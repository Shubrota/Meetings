import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,AddClientComponent,
    AddMeetingComponent,RouterModule,ClientListComponent,MeetingListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Client-Meeting';
}
