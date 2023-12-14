import { Component, Input, OnInit  } from '@angular/core';
import { MeetingserveService } from '../meetingserve.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Meeting } from '../Model/meeting';
@Component({
  selector: 'add-meeting',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-meeting.component.html',
  styleUrl: './add-meeting.component.css'
})
export class AddMeetingComponent {
  meetingForm!: FormGroup;
  
  iscnameInvalid: boolean = false;
  iscemailInvalid: boolean = false;

  meetingService!:MeetingserveService;
  meeting!:Meeting;
  


  constructor(private fb: FormBuilder, meetingService:MeetingserveService){
    this.meetingService=meetingService;

    this.meetingForm = this.fb.group(
      {
        topic: ['', [Validators.required, Validators.minLength(3)]],
        No: ['', [Validators.required, Validators.minLength(3)]],
        start: ['', [Validators.required, Validators.minLength(3)]],
        end: ['', [Validators.required, Validators.minLength(3)]],
      }
    ); 
      
  }
  @Input("xyz")
  xyz!:string;

 
  addMeeting():void{  
    console.log(this.meetingForm.value.topic);
    this.meetingService.addMeeting(1,this.meetingForm.value.topic,this.meetingForm.value.No,
      this.meetingForm.value.start,this.meetingForm.value.end);  
      
  }
}
