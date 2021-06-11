import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service'

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private httpService:HttpService) { }

  treatmentHistory(): Observable<any> {
    return this.httpService.get("movil-diabetic/treatment");
  }

  treatmentList(): Observable<any> {
    return this.httpService.get("movil-diabetic/register-treatment");
  }

  treatmentRegID(postData: any){
    return this.httpService.posttoken("movil-diabetic/continue-treatment",postData);
  }

}
