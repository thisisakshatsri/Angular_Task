import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  debugger: any
  private apiUrl = 'https://engagifii-qa-auth.azurewebsites.net/api/v1/Subject/GetAssignedRoles?tenantCode=okresa&userId=587a8d85-536f-49d9-bdc6-e13f7cc9b214';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    this.debugger;
    return this.http.get<any>(this.apiUrl);
  }
}
