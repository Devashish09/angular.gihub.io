import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Router, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  parentMessage = "message from parent";

  constructor( private dataService : DataService ,
               public router : Router ){

  }
 
 newMessage(){
   this.dataService.changeMessage(this.parentMessage);
   this.router.navigate( { component: ChildComponent },)
 }

}
