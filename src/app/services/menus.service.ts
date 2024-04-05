import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private http:HttpClient) { }

  getAllMenus(){
    return this.http.get(environment.apiMenu);
  }

  getMenuById(id: number){
    return this.http.get(environment.apiMenu + id);
  }

  createMenu(menu: any){
    return this.http.post(environment.apiMenu, menu);
  }

  updateMenu(menu: any){
    return this.http.put(environment.apiMenu + menu.id, menu);
  }

  deleteMenu(id: number){
    return this.http.delete(environment.apiMenu + id);
  }

  getMenusByUser(id: number){
    return this.http.get(environment.apiMenu + 'user/' + id);
  }

  getMenusByName(name: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      name: name
    }

    return this.http.post(environment.apiMenu + 'name', data, httpOptions);
  }

  getMenusByPlat(id: number){
    return this.http.get(environment.apiMenu + 'plat/' + id);
  }

  getMenusByPrice(price: number){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      price: price
    }

    return this.http.post(environment.apiMenu + 'prixMax' , data, httpOptions);
  }


}
