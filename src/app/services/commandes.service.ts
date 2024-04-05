import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommandesService {


  constructor(private http: HttpClient) { }

  getAllCommandes(){
    return this.http.get(environment.apiCommande);
  }

  getCommandeById(id: number){
    return this.http.get(environment.apiCommande + id);
  }

  createCommande(commande: any){
    return this.http.post(environment.apiCommande, commande);
  }

  updateCommande(commande: any){
    return this.http.put(environment.apiCommande + commande.id, commande);
  }

  deleteCommande(id: number){
    return this.http.delete(environment.apiCommande + id);
  }

  getCommandesByUser(id: number){
    return this.http.get(environment.apiCommande + 'user/' + id);
  }

  getCommandesByStatus(status: string){
    return this.http.get(environment.apiCommande + 'status/' + status);
  }

  getCommandesByDate(date: string){

    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      date: date
    }

    return this.http.post(environment.apiCommande + 'date', data, httpOptions);
  }

  getCommandesByMenu(id: number){
    return this.http.get(environment.apiCommande + 'menu/' + id);
  }

}
