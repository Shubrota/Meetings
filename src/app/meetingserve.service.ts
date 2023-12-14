import { Injectable } from '@angular/core';
import { Meeting } from './Model/meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingserveService {

  meeting!: Meeting[];
  Meeting: any;

  constructor() { 
    this.meeting = [
      new Meeting(1, "Dummy", 1, "2-dec-2023 5:00","2-dec-2023 6:00"),
    ]
  }
  // CRUD
  getMeeting = (id: number): Meeting => {
    console.log("Inside getMeeting() id=" + id);
    return this.meeting[id];
  }

  // All Meeting
  getAllClient = (): Meeting[] => {
    return this.meeting;
  }

   // Create / Add a new Meeting
   addMeeting = (id:number,topic: string,No:number,start:string,end:string): void => {
    console.log("addMeeting");
    let new_client: Meeting = new Meeting(this.meeting.length+1, topic, No,start,end);
    this.meeting.push(new_client);
  }
}
