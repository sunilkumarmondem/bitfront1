import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import {ValidationService} from '../validation.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	firstname:String;
	lastname:String;
	email:String;
	password:String;
	javascript:String;
	nodejs:String;
  constructor(private service:ValidationService,
  	private authser:AuthenticateService,
  	private router:Router,
  	  	private flash:FlashMessagesService) { }

  ngOnInit() {
  }

  register(){
  	const user={
  		firstname:this.firstname,
  		lastname:this.lastname,
  		email:this.email,
  		password:this.password,
  		javascript:this.javascript,
  		nodejs:this.nodejs
  	}
  	if(!this.service.validregister(user)){
  		this.flash.show('please fill all fields',{classes:['alert','alert-danger'],timeout:2000});
  		return false;
  	}
  	if(!this.service.validemail(user.email)){
  		this.flash.show('Invalid email',{classes:['alert','alert-danger'],timeout:2000});
  		return false;
  	}
  	this.authser.registeruser(user).subscribe(data =>{
  		
  		if(data.success){
       
        this.flash.show('you are registered successfully' ,{classes: ['alert', 'alert-success'],timeout:2000});
        this.router.navigate(['/login']);
      }else{
        this.flash.show(data.msg ,{classes: ['alert', 'alert-danger'],timeout:2000});
        this.router.navigate(['/register']);
      }
  			        
  		
  	})
  }

}
