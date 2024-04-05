import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }


  getAllPlats(){
    return this.http.get(environment.apiPlat);
  }

  createPlat(plat: any){
    return this.http.post(environment.apiPlat , plat);
  }

  deletePlat(id: any){
    return this.http.delete(environment.apiPlat + '/' + id);
  }

  updatePlat(id: any, plat: any){
    return this.http.put(environment.apiPlat + '/' + id, plat);
  }

  getPlatById(id: any){
    return this.http.get(environment.apiPlat + '/' + id);
  }

  getPlatByIngredient(ingredient: any){
    return this.http.get(environment.apiPlat + '/ingredient/' + ingredient);
  }

  getPlatByPrix(prix: any){

    const data = {
      prix: prix
    }

    return this.http.post(environment.apiPlat + '/prix', data);
  }

  getPlatByPrixMax(prix: any){

    const data = {
      prix: prix
    }

    return this.http.post(environment.apiPlat + '/prixMax', data);
  }

  getPlatByName(name: any){

    const data = {
      name: name
    }

    return this.http.post(environment.apiPlat + '/name', data);
  }

}
