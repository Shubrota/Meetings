import { Injectable } from '@angular/core';
import { Client } from './model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientserveService {

  client!: Client[];
  Client: any;

  constructor() { 
    this.client = [
      new Client(1, "Dummy", "email@email.com", "Address","Password"),
    ]
  }
  // CRUD
  getClient = (id: number): Client => {
    console.log("Inside getClient() id=" + id);
    return this.client[id];
  }

  // All client
  getAllClient = (): Client[] => {
    return this.client;
  }

   // Create / Add a new Client
  addClient = (id:number,clientname: string,cemail:string,address:string,password:string): void => {
    console.log("addclient");
    let new_client: Client = new Client(this.client.length+1, clientname, cemail,address,password);
    this.client.push(new_client);
  }
}
