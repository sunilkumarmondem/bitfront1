import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Router} from '@angular/router';
import {Location} from'@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

}
