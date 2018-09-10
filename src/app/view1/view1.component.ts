import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { GotService } from '../got.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit,OnDestroy {


  constructor(private _route:ActivatedRoute,private router:Router,public gotService:GotService) {

   }
   public currentObj;

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get("seriesId");
    console.log(myBlogId);
    this.currentObj = this.gotService.getSingleInformation(myBlogId);
  }
  ngOnDestroy(){
    console.log("view 2 destroy is called");
  }

}
