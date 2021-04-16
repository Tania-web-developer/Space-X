import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {

  constructor(
    private http: HttpClient,
  ) { }

  get(endpoint: string, version: string = 'v4') {
    return this.http.get(`https://api.spacexdata.com/${version}/${endpoint}`)
  }
  
}
