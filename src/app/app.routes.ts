import { Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { AppComponent } from './app.component';
import { ClientListComponent } from './client-list/client-list.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';

export const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'Add Client', component: AddClientComponent },
    { path: 'Show Client', component: ClientListComponent },
    { path: 'Add Meeting', component: AddMeetingComponent },
    { path: 'Show Meeting', component: MeetingListComponent },
   

];

