import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from 'src/app/shared/models/modules/shared/base-response.model';
import { environment } from 'src/environments/environment';
import { News } from '../_models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = `${environment.urlApi}news`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<BaseResponse<News[]>> {
    return this.http.get<BaseResponse<News[]>>(this.baseUrl);
  }

  getById(id: string): Observable<BaseResponse<News>> {
    return this.http.get<BaseResponse<News>>(`${this.baseUrl}/${id}`);
  }
}

