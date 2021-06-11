import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service'
import { weightI } from '../models/weight.interface';


@Injectable({
  providedIn: 'root'
})
export class WeightService {

  weightH = new BehaviorSubject<any>([]);

  constructor(private httpService:HttpService) { }

  changeWeightHistory(data:any){
    this.weightH.next(data);
  }

  weightHistory(): Observable<any> {
    return this.httpService.get("movil-diabetic/register-weight");
  }

  weightUP(postData: weightI){
    return this.httpService.posttoken("movil-diabetic/register-weight",postData);
  }


}
