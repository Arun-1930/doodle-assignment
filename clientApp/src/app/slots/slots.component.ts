import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  public now = new Date();
  public date:any={ year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() }
  public startDate: string = this.date

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  listslots(listform:any){
    this.date=listform.startDate.year+"-"+listform.startDate.month+"-"+listform.startDate.day
    this.router.navigate(['slots/'+this.date])

  }
}
