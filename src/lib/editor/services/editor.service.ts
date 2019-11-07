import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  public config: any;
  private subject = new Subject<any>();

  constructor() { }

  setConfig(cnf: any) {
    this.config = cnf;
  }

  getConfig() {
    return this.config;
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  postData(data: any) {
    this.subject.next(data);
  }
}
