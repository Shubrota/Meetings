import { Component } from '@angular/core';
import { MeetingserveService } from '../meetingserve.service';
import { Meeting } from '../Model/meeting';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meeting-list.component.html',
  styleUrl: './meeting-list.component.css'
})
export class MeetingListComponent {
  meeting !:Meeting[];  
  meetingserve: MeetingserveService;



  constructor(meetingserve: MeetingserveService){
    this.meetingserve=meetingserve;        
  }


  ngOnInit(): void {
    this.meeting = this.meetingserve.getAllClient();
  }

}
