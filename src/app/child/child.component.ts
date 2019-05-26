import { Component, OnInit, Input } from '@angular/core';
import { DataService  } from './../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage :  string ;
  constructor( private  dataService : DataService ) { }

  ngOnInit() {
    this.dataService.currentMessage
        .subscribe(message => this.childMessage = message );
  }

}
