import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,tap,map} from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthenticateService {

  constructor(private http:HttpClient) { }
authtoken:any;
user:any;
  private registerurl='register';
  private loginurl='login';
  private profileurl='profile';
  private usersurl='users';

  registeruser(user):Observable<any>{
  	return this.http.post<any>(this.registerurl,user,httpOptions).pipe(tap(data =>console.log(data)));
  }

loginuser(user):Observable<any>{
	return this.http.post<any>(this.loginurl,user,httpOptions).pipe(tap(data =>console.log(data)));

}

storedata(token,user){
	localStorage.setItem('token',token);
	localStorage.setItem('user',JSON.stringify(user));
	this.authtoken=token;
	this.user=user;

}

logout(){
  	this.authtoken=null;
  	this.user=null;
  	localStorage.clear();
  }

  getprofile():Observable<any>{
  	
  	
  	this.loadtoken();
  	const httpOptions1 = {
    headers: new HttpHeaders({ 'Authorization':this.authtoken })
};
  
  	return this.http.get<any>(this.profileurl,httpOptions1).pipe(tap(data =>console.log(data)));
  }

  

  getusersfrom():Observable<any>{
  	return this.http.get<any>(this.usersurl).pipe(tap(data =>console.log(data)));
  };

  getdetailsfrom(id):Observable<any>{
  	return this.http.get<any>(`${this.usersurl}/${id}`).pipe(tap(data =>console.log(data)));
  }

  loggedin(){
  	return !!localStorage.getItem('token');
  }

  updateuser(user):Observable<any>{
  	this.loadtoken();
  	const httpOptions1 = {
    headers: new HttpHeaders({ 'Authorization':this.authtoken })
};
  
  	return this.http.post<any>(this.profileurl,user,httpOptions1).pipe(tap(data =>console.log(data)));
  }

  loadtoken(){
  	const token=localStorage.getItem('token');
  	this.authtoken=token;

  }




}
