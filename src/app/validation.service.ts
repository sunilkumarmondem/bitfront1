import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

  validregister(user){
  	if(user.firstname == undefined || user.lastname ==undefined || user.email==undefined ||user.password==undefined || user.javascript==undefined || user.nodejs==undefined){
  		return false;
  	}
  	else{
  		return true;
  	}
  }

  validemail(email){
  	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return re.test(email);
  }


}
