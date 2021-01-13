import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appoinment-Booking';

constructor(public router: Router){

}
ngOnInit() {
  this.router.navigate(['slots'])

}
}
