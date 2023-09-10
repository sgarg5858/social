import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '@social/auth-model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  registerUser(user:Partial<User>)
  {
    return this.httpClient.post<User>('https://conduit.productionready.io/api/users',user);
  }
}
