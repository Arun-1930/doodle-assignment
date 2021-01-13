import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListslotService {

  constructor(private _http: HttpClient, private _router: Router, private activatedRoute: ActivatedRoute) { }

  public getSlots = (date:any): Observable<any> => {
    console.log('list slot called')
    return this._http.get(`http://localhost:5000/listSlots/`+date)
  }
  public addSlots = (form:any): Observable<any> => {
    console.log("addSlot called")
    return this._http.post(`http://localhost:5000/addSlot/`+form.date,form)
  }
}
