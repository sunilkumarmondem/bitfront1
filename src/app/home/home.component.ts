import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authser:AuthenticateService,
  	private router:Router,
  	  	private flash:FlashMessagesService) { }
  users:any;

  ngOnInit() {
  	this.getusers();
  }
  getusers(){
  	this.authser.getusersfrom().subscribe(data =>{
  		this.users=data;
  	})
  };

}
