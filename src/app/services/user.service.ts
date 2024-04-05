import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(environment.apiUser);
  }

  getUserById(id: number){
    return this.http.get(environment.apiUser + id);
  }

  createUser(user: any){
    return this.http.post(environment.apiUser, user);
  }

  updateUser(user: any){
    return this.http.put(environment.apiUser + user.id, user);
  }

  deleteUser(id: number){
    return this.http.delete(environment.apiUser + id);
  }

  getUsersByEmail(email: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      email: email
    }

    return this.http.post(environment.apiUser + 'email', data, httpOptions);
  }

  getUsersByFirstName(firstName: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      firstName: firstName
    }

    return this.http.post(environment.apiUser + 'firstName', data, httpOptions);
  }

  getUsersByLastName(lastName: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      lastName: lastName
    }

    return this.http.post(environment.apiUser + 'lastName', data, httpOptions);
  }

  getUsersByTel(tel: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      tel: tel
    }

    return this.http.post(environment.apiUser + 'telephone', data, httpOptions);
  }

  getUsersByAddress(address: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      address: address
    }

    return this.http.post(environment.apiUser + 'adresse', data, httpOptions);
  }

  getUsersAdmin(){
    return this.http.get(environment.apiUser + 'admin/all');
  }

  connectUser(email: string, password: string){
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const data = {
      email: email,
      password: password
    }

    return this.http.post(environment.apiUser + 'connect', data, httpOptions);
  }

}
