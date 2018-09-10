import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(public gotService : GotService) {
    console.log("Home component ng constructor");
   }
   public obj;

  ngOnInit() {
  console.log("Home component ng init");
  this.obj = this.gotService.getAllObjs();
  console.log(this.obj);
  }

}
