import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientserveService } from '../clientserve.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css'
})
export class ClientListComponent {

  client !:Client[];  
  clientServe: ClientserveService;



  constructor(clientServe: ClientserveService){
    this.clientServe=clientServe;        
  }


  ngOnInit(): void {
    this.client = this.clientServe.getAllClient();
  }


}
