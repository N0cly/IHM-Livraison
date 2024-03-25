import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http:HttpClient) { }

  getMenus() {

    return this.http.get(environment.api_menus);
  }

  getPlatsMenu(id: number) {

    return this.http.get(environment.api_menus + '/' + id + '/plats');
  }

}
