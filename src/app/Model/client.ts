export class Client {

    cid:number=0;
    clientname: string = "";
    cemail:string = "";
    Address: string = "";
    Password:string="";

    constructor(id:number,clientname: string,cemail:string,address:string ,Password:string){
        this.cid=id;
        this.clientname=clientname;
        this.cemail=cemail;
        this.Address=address;
        this.Password=Password;
    }
}
