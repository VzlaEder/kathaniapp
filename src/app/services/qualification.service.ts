import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private httpService: HttpService ) { }

  questions(): Observable<any> {
    return this.httpService.get('movil-diabetic/qualification');
  }

  qualification(): Observable<any> {
    return this.httpService.get('qualification-level');
  }

  qualificationUP(postData: any){
    return this.httpService.posttoken('movil-diabetic/qualification',postData);
  }
}
