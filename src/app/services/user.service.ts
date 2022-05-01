import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  userUrl = 'http://localhost:3000/users'

  createUser(user:any){
    return this.http.post(this.userUrl, user);
  }

  getAllUser(){
    return this.http.get(this.userUrl);
  }

  getStudentById(id:number){
    return this.http.get(`${this.userUrl}/${id}`)
  }

  updateUser(id:number, data:any){
    return this.http.put(`${this.userUrl}/${id}`, data)
  }

  deleteUser(id:number){
    return this.http.delete(`${this.userUrl}/${id}`);
  }
}
