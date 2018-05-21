import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthenticateService} from './authenticate.service';




@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private service:AuthenticateService,
		private router:Router){}
  canActivate():boolean{
		if(this.service.loggedin()){
			return true;
		}else{
			this.router.navigate(['/login']);
			return false;
		}
	}
}
