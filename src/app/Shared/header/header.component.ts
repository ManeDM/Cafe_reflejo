import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  show: boolean = true;

  showTeam(){
    if(this.show){
       this.show = false;
    }
    else{
      this.show = true;
    }
  }

  constructor() { }

  ngOnInit() { }

  

  
}