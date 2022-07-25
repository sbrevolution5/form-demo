import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSubscriptionTypes(): any {
    return of(['Monthly','Annual','Lifetime']);
  }

  constructor(private http: HttpClient) { }
  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
    return this.http.post('https://putsreq.com/mfRSEia85sa9uYxGLJeo',userSettings);
    //return of(userSettings);
  }
}
