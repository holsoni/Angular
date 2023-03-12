import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent {
  /*@Input() menu:any[] = [];


  @Output() event = new EventEmitter<any[]>();

  menuClick(label:string){
      this.menu.map((m) => { m.active = m.label === label;
          console.log(m)
          return m;
      })
    this.event.emit(this.menu);
  }*/
}
