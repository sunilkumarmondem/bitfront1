import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {ValidationService} from '../validation.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ValidationService,
  	private authser:AuthenticateService,
  	private router:Router,
  	  	private flash:FlashMessagesService) { }
  email:String;
  password:String;

  ngOnInit() {
  }
login(){
	const user={
		email:this.email,
		password:this.password
	}
	this.authser.loginuser(user).subscribe(data =>{
		if(data.success){
			this.authser.storedata(data.token,data.user);
			this.flash.show('you are logged in' ,{classes: ['alert', 'alert-success'],timeout:2000});
  			this.router.navigate(['/home']);
		}
		else{
			this.flash.show(data.msg ,{classes: ['alert', 'alert-danger'],timeout:2000});
  			this.router.navigate(['/login']);
		}
	})

}



}
