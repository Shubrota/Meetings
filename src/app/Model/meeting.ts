export class Meeting {
    mid:number=0;
    meetingTopic: string = "";
    NoPpl:number = 0;
    start: string = "";
    end:string="";

    constructor(id:number,meetingTopic: string,NoPpl:number,start:string ,end:string){
        this.mid=id;
        this.meetingTopic=meetingTopic;
        this.NoPpl=NoPpl;
        this.start=start;
        this.end=end;
    }
}
