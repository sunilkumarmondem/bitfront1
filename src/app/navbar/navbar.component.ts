import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from '../authenticate.service';
import { FlashMessagesService } from 'ngx-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private authser:AuthenticateService,
  	private router:Router,
  	  	private flash:FlashMessagesService) { }

  ngOnInit() {
  }

  loggingout(){
  	this.authser.logout();
  	this.flash.show("you are logged out" ,{classes: ['alert', 'alert-danger'],timeout:2000});
  			this.router.navigate(['/login']);
  			return false;

}
}
