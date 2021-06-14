import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor( private httpService: HttpService) { }

  dashBoardData(): Observable<any> {
    return this.httpService.get('movil-diabetic/dashboard');
  }

}
