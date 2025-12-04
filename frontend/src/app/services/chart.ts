import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ChartData {
  labels: string[];
  values: number[];
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private baseUrl = 'http://localhost:3000/api/charts';

  constructor(private http: HttpClient) {}

  getSummaryChart(): Observable<ChartData> {
    return this.http.get<ChartData>(`${this.baseUrl}/summary`);
  }

  getReportsChart(): Observable<ChartData> {
    return this.http.get<ChartData>(`${this.baseUrl}/reports`);
  }
}

