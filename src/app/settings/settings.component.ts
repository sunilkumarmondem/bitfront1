import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Router} from '@angular/router';
import {Location} from'@angular/common';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private authser:AuthenticateService,
  	private router:Router,
  	  	private flash:FlashMessagesService,
  	  	private location:Location) { }
profile:any;
  ngOnInit() {
  	this.authser.getprofile().subscribe(data =>{
  		console.log(data);
  		this.profile=data.user;
  	})
  }


goback(){
  this.location.back();
  }

  
  save(){
  	this.authser.updateuser(this.profile).subscribe(data =>{
  	this.flash.show('user updated successfully' ,{classes: ['alert', 'alert-success'],timeout:1000});
  		this.goback();
  	})
  }

}
