import { Component, OnInit ,ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { ListslotService } from './listslot.service';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';
 
const Moment = extendMoment(moment);

@Component({
  selector: 'app-listslot',
  templateUrl: './listslot.component.html',
  styleUrls: ['./listslot.component.css']
})
export class ListslotComponent implements OnInit {
public date:any;
public closeResult = '';
public morningSlot:any
public eveningSlot:any
public startTime:any;
public endTime:any;
public Slots:any;
public form:any;
public error:string='';
public columnDefs=[
  {
    field: 'Slot', sortable: true, filter: true},
    {field: 'Appointments',sortable: true, filter: true
  }
]
constructor(public router: Router,private route:ActivatedRoute,private modalService: NgbModal,private elementRef: ElementRef, private listSlotService: ListslotService) {
}

ngOnInit(): void {
this.date=this.route.snapshot.params['date']
this.getslot(this.date)
}

getslot(date:any){

this.listSlotService.getSlots(date).subscribe(
(apiResponse) => {
this.morningSlot=[]
this.eveningSlot=[]
this.Slots=apiResponse.data
apiResponse.data.forEach((element:any) => {

if((element.startTime < "12:00") || (element.startTime == "24:00") || (element.startTime == "24:30")){
var sample={
Slot: element.startTime+'-'+element.endTime,
Appointments: element.appointmentCount
}
this.morningSlot.push(sample)
}else
{
var sample={
Slot: element.startTime+'-'+element.endTime,
Appointments: (element.appointmentCount).toString()
}
this.eveningSlot.push(sample)
}
})
}
)}

open(content:any) {
this.error=''
const modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',
windowClass: "myCustomModalClass"});
modalRef.result.then(
result => {
this.startTime=result[0]
this.endTime=result[1]
var hour:any= parseInt(this.startTime.split(':')[0])
var min= parseInt(this.startTime.split(':')[1])     
var res=min+30
if(res>=60){
res=res-60;
hour=hour+1
console.log(hour)
if(hour <9){
hour="0"+hour}
}
else{
if(hour<9){
hour="0"+hour}
}
var sample=hour+":"+res
if(sample ==this.endTime){
var count:boolean=false;

this.Slots.forEach((e:any)=>{
if(e.startTime == this.startTime){
count=true;
}
else{
let range1:any = Moment.range( moment(this.startTime, 'HH:mm'),  moment(this.endTime, 'HH:mm'));
let range2:any = Moment.range( moment(e.startTime, 'HH:mm'),  moment(e.endTime, 'HH:mm'));
if( range1.overlaps(range2) ){
count = true;
}
}
})
if(count==false){//not match
this.form={
date:this.date,
startTime: this.startTime,
endTime: this.endTime,
appointmentCount: 0
}

this.listSlotService.addSlots(this.form).subscribe(

(apiResponse) => {
this.getslot(this.date)
})
}  
else{
this.error="Slot already exist/ Slot Overlap"
}
}
else{
this.error="Span should be 30 mins"
}
},
(reason:any) => {}
);
}

back(){
this.router.navigate(['slots'])
}
 
}

