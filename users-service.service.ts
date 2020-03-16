import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
	private baseUrl = 'http://localhost:8080/users'
 private baseUrl1 = 'http://localhost:8080/products'


  constructor(private http: HttpClient,private userService: UsersServiceService) { }
  /*  getUserList(): Observable<any> {
  	return this.http.get(`${this.baseUrl}`);
}*/
createUser(user: Object): Observable<Object> {
  		return this.http.post(`${this.baseUrl}`,user);
}

  loginValidation(name,password){
  		return this.http.get('http://localhost:8080/users/'+name+'/'+password);
    }

     getProductList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
}
  }
/*}
 getUsers(name:string): Observable<any> {
  	return this.http.get(`${this.baseUrl}/${name}`);
  }
*/
