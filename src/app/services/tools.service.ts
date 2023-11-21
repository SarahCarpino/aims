import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private _http: HttpClient) { }

  addTool(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/tools', data);
  }
}
