import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onclick(){
   alert('button clicked');
  }
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];
  isAvailable:boolean=false;
  title:string='demoAngular';
  invalid:string='demoInvalid';

  onChange(value){
    console.log(value);
  }
  eventClick(event){
    alert(event);
  }
}
