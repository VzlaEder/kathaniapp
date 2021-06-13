import { HttpService } from './http.service'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class NotreatmentService {

  constructor(private httpService:HttpService) { }

  treatmentNoHistory(): Observable<any> {
    return this.httpService.get("movil-diabetic/activity");
  }

  treatmentNoList(): Observable<any> {
    return this.httpService.get("movil-diabetic/register-activity");
  }

  treatmentNoRegID(postData: any){
    return this.httpService.posttoken("movil-diabetic/continue-activity",postData);
  }

}
