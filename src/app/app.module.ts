import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChangetextDirective } from './changetext.directive';
import { RouterModule} from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { EditComponent } from './edit/edit.component';
import { GotService } from './got.service';
import { HttpserviceService } from './httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangetextDirective,
    View1Component,
    View2Component,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home',
      component:HomeComponent},
      {path: 'view1/:seriesId',
      component:View1Component},
      {path: 'view2',
      component:View2Component},
      {path: 'edit/:seriesId',
      component:EditComponent}
    ])
  ],
  providers: [GotService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
