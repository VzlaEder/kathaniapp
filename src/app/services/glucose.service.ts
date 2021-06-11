import { Injectable } from '@angular/core';
import { HttpService } from './http.service'
import { BehaviorSubject, Observable } from 'rxjs'
import { glucoseI } from '../models/glusose.interface';




@Injectable({
  providedIn: 'root'
})
export class GlucoseService {

  glucoseH = new BehaviorSubject<any>([]);

  constructor(private httpService:HttpService) { }

  changeGlucoseHistory(data:any){
    this.glucoseH.next(data);
  }

  glucoseHistory(): Observable<any> {
    return this.httpService.get("movil-diabetic/register-glucose");
  }

  glucoseUP(postData: any){
    return this.httpService.posttoken("movil-diabetic/register-glucose",postData);
  }

}
