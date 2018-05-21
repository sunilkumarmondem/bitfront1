import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';
import {AuthenticateService} from '../authenticate.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private authser:AuthenticateService,
  	private route:ActivatedRoute,
  	private location:Location,
  	) { }
detail:any;
  ngOnInit() {
  	this.getdetails();
  }

  getdetails(){
  	const id=this.route.snapshot.paramMap.get('_id');
  	this.authser.getdetailsfrom(id).subscribe(data =>{
  		this.detail=data;
  	})
  }
  goback(){
  this.location.back();
  }


  }


