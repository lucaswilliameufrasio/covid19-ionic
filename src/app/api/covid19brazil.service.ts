import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class Covid19brazilService {
  baseURL: string = "https://covid19-brazil-api.now.sh";

  constructor(private http: HttpClient) {}

  getEpidemiologicalStateFromBrazil(){
    return this.http.get(this.baseURL + "/api/report/v1/brazil");
  }
}
